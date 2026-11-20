# منيو ÇUKUR

Static menu site on Netlify. The menu lives in `data/menu.json` and is edited through the Arabic admin at `/admin` (Decap CMS + Netlify Identity + Git Gateway). There's no backend and no build step.

| Path | What it is |
|---|---|
| `index.html` | Public menu. Fetches `/data/menu.json` with `cache: "no-store"` plus a cache-busting query |
| `data/menu.json` | All categories, dishes and prices, plus the phone number and tagline |
| `admin/index.html`, `admin/config.yml` | Decap CMS admin (git-gateway, branch `main`) |
| `admin/ar.js` | Arabic UI strings for Decap, which ships no Arabic locale |
| `images/uploads/` | Dish photos uploaded from the admin |
| `netlify.toml` | Publish root, no build, no-cache for the menu, noindex for `/admin` |

## Menu format

```json
{
  "settings": { "phone": "71472510", "tagline": "…" },
  "categories": [
    { "name": "اللحوم", "order": 1, "note": "",
      "dishes": [ { "name": "فروج غاز", "price": "1.000.000 ل.ل", "description": "", "image": "", "available": true } ] }
  ]
}
```

- Categories are shown sorted by `order` (smallest first).
- Dishes are shown in their list order. Drag them in the admin to reorder.
- `available: false` shows the dish struck through and marked «غير متوفر».

## Running it locally

```sh
npx serve .                 # or: python3 -m http.server 5055
npx decap-server            # optional: lets /admin edit local files without logging in
```
