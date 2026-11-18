// Pré-renderiza o HTML da página no build: o conteúdo aparece antes do JavaScript carregar.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href)
const file = resolve(root, 'dist/index.html')
const html = readFileSync(file, 'utf8')
const marker = '<div id="root"></div>'
if (!html.includes(marker)) throw new Error('Marcador #root não encontrado em dist/index.html')
writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`))
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('Pré-renderização concluída: dist/index.html')
