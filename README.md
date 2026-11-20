# منيو ÇUKUR

Static menu site on Netlify. The menu lives in `data/menu.json` and is edited through a phone-first Arabic admin at `/admin` (Netlify Identity + Git Gateway). Decap CMS remains at `/admin/cms/` for desktop use. There's no backend and no build step.

| Path | What it is |
|---|---|
| `index.html` | Public menu. Fetches `/data/menu.json` with `cache: "no-store"` plus a cache-busting query |
| `data/menu.json` | All categories, dishes and prices, plus the phone number and tagline |
| `admin/index.html` | Phone admin: logs in via Netlify Identity, reads/writes `data/menu.json` and uploads images through Git Gateway |
| `admin/cms/` | Decap CMS (desktop backup): `config.yml` + `ar.js` Arabic strings |
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

- Categories are shown sorted by `order`; the phone admin rewrites `order` from the ↑/↓ position on every save.
- Dishes are shown in their list order.
- `available: false` shows the dish struck through and marked «غير متوفر».

## Running it locally

```sh
npx serve .                 # or: python3 -m http.server 5055
npx decap-server            # optional: lets /admin edit local files without logging in
```
