# Nötige Anpassungen 

0. Installiern Rollup Erweiterungen 
   - npm install rollup-plugin-copy --save-dev 
   - npm install rollup-plugin-minify-html-literals --save-dev 
   - rollup-plugin-summary
   - oder einfach in 'package.json' einfügen

1. Löschen unnötige Packete aus "devDependencies"
   - npm uninstall es-dev-server --save-dev 
   - prettierrc und sein Config 
   - @11ty/eleventy und sein Config 
   - es-dev-server (veraltet)

2. Abhängigkeiten installieren
   - alle Abhängigkeiten die schon im 'package.json' eigetragen sind 
   - npm install

3. Anpassen 'tsconfig.json' 
   - tsc soll in Folder 'out-tsc' transpilieren
     - setzen: "outDir": "out-tsc"

3. Anpassen 'rollup.config.js' 
   - Rollup soll in Folder 'dist' builden
     - Input setzen:  "input: 'out-tsc/my-element.js'"
     - Output setzen: "'dist/my-element.bundled.js'"

4. Anpassen 'index.html'
   - setzen type="module": "src="../out-tsc/my-element.js"

5. Web Dev Sever installieren
   - Im Vorlage wird alte Version 'es-dev-server' genutzt
   - Es gibt keine Config für 'es-dev-server'
   - Web Dev Sever installieren: npm install --save-dev @web/dev-server
   - Config 'web-dev-server.config.js' aus Repo 'rollup' übernehmen 

6. concurrently installieren
   - npm install --save-dev concurrently

7. Config 'package.json' anpassen 
   - löschen Modul-Typ Option: "type": "module"
     - sonst hat web-dev-server Problem damit 
     - da in seiner Config die CommonJS Syntax module.exports genutzt wird
   - übernehmen einige 'run scripts' aus aus Repo 'rollup'   
     - "tsc:watch", web-dev-server", "start" und "build"
     - altes "build" löschen, da er nut tsc ausgeführt hat 
   - 'es-dev-server' Scripte löschen 
     - "docs:serve" UND "serve" 
   - 'eleventy' Scripte löschen 
   - 'prettierrc' Scripte löschen    
   
8. Builden
   - Mit 'rollup' : npm run start
9. Testen
   - Mit 'web-dev-server' : npm run start

10. HTTP Test-Server starten
   - http-server dist/ -o