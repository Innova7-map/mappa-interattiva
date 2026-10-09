document.addEventListener('DOMContentLoaded', () => {

    // prevenzione attacchi di tipo xss
    const escapeHTML = (str) => {
        if (!str) return '';
        return String(str).replace(/[&<>"']/g, (m) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[m]);
    };

    const map = L.map('map').setView([45.138151, 7.769802], 18);

    const lightTiles = L.tileLayer('https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_4d2e_1_0df30db71ee4a306493b9be4', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap &copy; CARTO'
    });

    const darkTiles = L.tileLayer('https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_4d2e_1_0df30db71ee4a306493b9be4', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap &copy; CARTO'
    });


    const darkModeToggle = document.getElementById('darkModeToggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' && darkModeToggle) {
        darkModeToggle.checked = true;
        darkTiles.addTo(map);
        document.body.classList.add('dark-mode');
    } else {
        lightTiles.addTo(map);
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', (e) => {
            const isDark = e.target.checked;
            
            if (isDark) {
                map.removeLayer(lightTiles);
                darkTiles.addTo(map);
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                map.removeLayer(darkTiles);
                lightTiles.addTo(map);
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    const clusterOptions = { maxClusterRadius: 40, disableClusteringAtZoom: 18 };

    const clusters = {
        principali: L.markerClusterGroup(clusterOptions).addTo(map),
        bancarelle: L.markerClusterGroup(clusterOptions).addTo(map),
        infopoint: L.markerClusterGroup(clusterOptions).addTo(map),
        fuori: L.markerClusterGroup(clusterOptions).addTo(map)
    };

    const icons = {
        festival: L.icon({
            iconUrl: 'img/logo-festival-base1.png',
            iconSize: [60, 100],
            iconAnchor: [30, 100],
            popupAnchor: [0, -100]
        }),
        bancarella: (num) => L.divIcon({
            className: 'custom-pin-bancarella',
            html: `<img src="img/custom-pin-bancarella.png" alt="Pin"><span class="pin-numero">${escape(num)}</span>`,
            iconSize: [30, 50],
            iconAnchor: [15, 50],
            popupAnchor: [0, -50]
        }),
        info: L.icon({
            iconUrl: 'img/icon-info.png',
            iconSize: [30, 50],
            iconAnchor: [15, 50],
            popupAnchor: [0, -50]
        }),
        fuori: L.icon({
            iconUrl: 'img/comune-fuori.png',
            iconSize: [38, 63],
            iconAnchor: [19, 63],
            popupAnchor: [0, -63]
        })
    };

    const creaPunto = (punto) => {
        const gmapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(punto.lat)},${encodeURIComponent(punto.lng)}`;
        let progHtml = "";

        if (punto.programma?.length) {
            const items = punto.programma.map(item => `
                <li>
                    ${item.giorno ? `<span class="giorno"><i>${escapeHTML(item.giorno)}</i> - </span>` : ''}
                    <span class="ora">${escapeHTML(item.ora)}</span>
                    <span class="evento-titolo">${escapeHTML(item.evento)}</span>
                    ${item.relatore ? `<div class="relatore">con <i>${escapeHTML(item.relatore)}</i></div>` : ''} 
                    ${item.noprenot ? `<span class="no-prenot">${escapeHTML(item.noprenot)}</span>` : ''}
                </li>
            `).join('');
            progHtml = `<ul class="programma-list">${items}</ul>`;
        }

        const alertHtml = punto.avvisoMaltempo
            ? `<p style="color:#d32f2f; font-weight:bold; font-size:12px; margin-bottom:6px;">${escapeHTML(punto.avvisoMaltempo)}</p>`
            : "";

        return `
            <div class="popup-festival">
                <h2>${escapeHTML(punto.titolo)}</h2>
                <h3>${escapeHTML(punto.nome)}</h3>
                ${alertHtml}
                ${progHtml}
                <div class="popup-actions">
                    <a href="${gmapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-map">🗺️ Apri in Google Maps</a>
                    ${punto.linkAgenda ? `<a href="${encodeURI(punto.linkAgenda)}" target="_blank" rel="noopener noreferrer" class="btn-agenda">📅 Vedi programma completo</a>` : ''}
                </div>
            </div>
        `;
    };

    const renderPunti = (pointsList = [], clusterGroup, icon) => {
        pointsList.forEach(punto => {
            const marker = L.marker([punto.lat, punto.lng], { icon });
            marker.bindPopup(creaPunto(punto));
            clusterGroup.addLayer(marker);
        });
    };

    if (typeof puntiFestival !== 'undefined') renderPunti(puntiFestival, clusters.principali, icons.festival);
    if (typeof puntiFuori !== 'undefined') renderPunti(puntiFuori, clusters.fuori, icons.fuori);

    if (typeof puntiBancarelle !== 'undefined') {
        puntiBancarelle.forEach(punto => {
            const marker = L.marker([punto.lat, punto.lng], {
                icon: icons.bancarella(punto.numero)
            });
            marker.bindPopup(`<div class="popup-festival"><h2>${escapeHTML(punto.desc)}</h2></div>`);
            clusters.bancarelle.addLayer(marker);
        });
    }

    if (typeof puntiInfo !== 'undefined') {
        puntiInfo.forEach(punto => {
            const marker = L.marker([punto.lat, punto.lng], { icon: icons.info });
            marker.bindPopup(`<div class="popup-festival"><h2>${escapeHTML(punto.desc)}</h2></div>`);
            clusters.infopoint.addLayer(marker);
        });
    }

    document.querySelectorAll('.legenda input[type="checkbox"]').forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const key = e.target.getAttribute('data-cluster');
            const targetGroup = clusters[key];
            if (targetGroup) {
                e.target.checked ? map.addLayer(targetGroup) : map.removeLayer(targetGroup);
            }
        });
    });

    const ricercaInput = document.getElementById('ricercaInput');
    const Risultati = document.getElementById('Risultati');

    if (ricercaInput && Risultati) {
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
            L.DomEvent.disableScrollPropagation(searchContainer);
            L.DomEvent.disableClickPropagation(searchContainer);
        }

        const searchablePoints = [
            ...(typeof puntiFestival !== 'undefined' ? puntiFestival.map(p => ({ ...p, clusterGroup: clusters.principali })) : []),
            ...(typeof puntiFuori !== 'undefined' ? puntiFuori.map(p => ({ ...p, clusterGroup: clusters.fuori })) : [])
        ];

        ricercaInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            Risultati.innerHTML = '';

            if (query.length < 2) {
                Risultati.classList.remove('active');
                return;
            }

            const matches = [];

            searchablePoints.forEach(punto => {
                const matchTitolo = punto.titolo?.toLowerCase().includes(query);
                const matchNome = punto.nome?.toLowerCase().includes(query);
                let detailMatch = "";

                if (punto.programma) {
                    const foundProg = punto.programma.find(prog =>
                        prog.evento?.toLowerCase().includes(query) ||
                        prog.relatore?.toLowerCase().includes(query)
                    );
                    if (foundProg) detailMatch = foundProg.evento;
                }

                if (matchTitolo || matchNome || detailMatch) {
                    matches.push({ punto, detail: detailMatch || punto.nome });
                }
            });

            if (matches.length > 0) {
                matches.forEach(({ punto, detail }) => {
                    const item = document.createElement('div');
                    item.className = 'search-item';
                    item.innerHTML = `
                        <div class="search-item-title">${escapeHTML(punto.titolo)}</div>
                        <div class="search-item-sub">📍 ${escapeHTML(punto.nome)} ${detail ? '• ' + escapeHTML(detail) : ''}</div>
                    `;

                    item.addEventListener('click', () => {
                        focusOnPoint(punto);
                        Risultati.classList.remove('active');
                        ricercaInput.value = punto.titolo;
                    });

                    Risultati.appendChild(item);
                });
                Risultati.classList.add('active');
            } else {
                Risultati.classList.remove('active');
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                Risultati.classList.remove('active');
            }
        });
    }

    const focusOnPoint = (punto) => {
        if (!map.hasLayer(punto.clusterGroup)) {
            map.addLayer(punto.clusterGroup);
            const clusterKey = Object.keys(clusters).find(key => clusters[key] === punto.clusterGroup);
            const toggle = document.querySelector(`input[data-cluster="${clusterKey}"]`);
            if (toggle) toggle.checked = true;
        }

        const latLng = L.latLng(punto.lat, punto.lng);
        map.flyTo(latLng, 18, { duration: 1.2 });

        const targetMarker = findMarkerByCoords(punto.clusterGroup, latLng);
        if (targetMarker) {
            punto.clusterGroup.zoomToShowLayer(targetMarker, () => targetMarker.openPopup());
        }
    };

    const findMarkerByCoords = (group, latLng) => {
        let match = null;
        group.eachLayer(layer => {
            if (layer.getLatLng().equals(latLng, 0.0001)) match = layer;
        });
        return match;
    };
});
