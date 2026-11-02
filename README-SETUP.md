# The Isle Cheats — D: setup

C: is full; use this folder as the deploy target.

## One command (run in **cmd.exe**, not Cursor)

```bat
set TEMP=D:\temp
set TMP=D:\temp
set npm_config_cache=D:\npm-cache
node D:\theisle-cheats-net\bootstrap-theisle.mjs
```

This copies `D:\buyaion2cheats-net` (already Isle-rebranded) + non-empty files from your C: partial rebrand, links `node_modules`, and starts `http://127.0.0.1:4321`.

## Already patched on D:\buyaion2cheats-net

- `theisle-cheats.net`, `/products/the-isle-cheats/`
- Checkout: `https://zadeyo.com/go/8b9cad82?to=%2Fproducts%2Fthe-isle-novaxware`
- Hero: 7 Supabase CDN slides + carousel prev/next
- `ResponsiveImage.astro` external HTTPS
- Blog card images cycle CDN URLs
