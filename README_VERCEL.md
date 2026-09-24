# Dark SMP’yi Vercel’de Yayınlama

Bu proje Vite + React tabanlıdır. Vercel ayarları `vercel.json` içinde hazırlandı. Proje derlenirken `pnpm run build` çalışır ve Vercel, `dist/public` klasörünü yayınlar.

## 1. Projeyi bilgisayarına al

Projeyi Manus dışına çıkarırken proje klasörünü indir veya dışa aktar. Klasörün içinde `package.json`, `pnpm-lock.yaml`, `client/`, `server/`, `shared/` ve `vercel.json` dosyalarının bulunduğundan emin ol.

Yerel makinede terminal açıp proje klasörüne gir:

```bash
cd dark-smp
```

Node.js 20 veya daha yeni bir sürüm kurulu olmalıdır. Ardından bağımlılıkları yükleyip üretim derlemesini test et:

```bash
pnpm install
pnpm run build
```

`pnpm` kurulu değilse şu komutu bir kez çalıştırabilirsin:

```bash
npm install --global pnpm
```

## 2. GitHub’a yükle

GitHub’da yeni ve boş bir repository oluştur. Repository adını örneğin `dark-smp` yap. README, `.gitignore` veya lisans dosyasını GitHub’ın oluşturmasına gerek yok; proje dosyaları zaten hazır.

Sonra proje klasöründe şu komutları çalıştır:

```bash
git init
git add .
git commit -m "Prepare Dark SMP for Vercel"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/dark-smp.git
git push -u origin main
```

`KULLANICI_ADIN` kısmını kendi GitHub kullanıcı adınla değiştir. GitHub kimlik doğrulaması isterse GitHub hesabına ait giriş yöntemini kullan.

## 3. Vercel’e bağla

1. [Vercel Dashboard](https://vercel.com/dashboard) adresine git.
2. **Add New → Project** seçeneğine tıkla.
3. GitHub hesabını bağla ve `dark-smp` repository’sini seç.
4. Import ekranında ayarların otomatik gelmesini bekle.
5. Gerekirse şu değerleri kontrol et:

| Ayar | Değer |
|---|---|
| Framework Preset | Vite |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm run build` |
| Output Directory | `dist/public` |
| Root Directory | `.` |

6. **Deploy** butonuna bas.

Vercel başarılı derleme sonunda geçici bir `vercel.app` adresi verir. Bu adresi paylaşabilir veya Vercel Project Settings → Domains bölümünden kendi alan adını bağlayabilirsin.

## 4. Sonraki güncellemeler

Her değişiklikten sonra şu komutlar yeterlidir:

```bash
git add .
git commit -m "Update Dark SMP landing page"
git push
```

Vercel, GitHub’daki push işlemini algılar. `main` dalına giden değişiklikler production yayını günceller. Diğer branch’ler ve pull request’ler ayrı preview deployment oluşturabilir. [2]

## Alternatif: Vercel CLI

GitHub kullanmak istemezsen proje klasöründe şu komutlarla doğrudan yayınlayabilirsin:

```bash
npm install --global vercel
vercel login
vercel
```

Sorular geldiğinde proje kök klasörünü onayla. Production yayını için:

```bash
vercel --prod
```

Vercel, Vite projelerini otomatik algılayabilir; bu projede ayrıca eklenen `vercel.json` dosyası build ve çıktı klasörünü açıkça sabitler. [1] [3]

## Bülten formu hakkında önemli not

Mevcut bülten formu frontend seviyesinde çalışır ve e-posta adresini kullanıcının tarayıcısındaki `localStorage` alanına kaydeder. Bu nedenle henüz gerçek bir e-posta listesine gönderim yapmaz ve farklı kullanıcıların kayıtlarını merkezi olarak toplamaz.

Gerçek kayıt almak için sonraki aşamada Brevo, Mailchimp veya Resend gibi bir e-posta servisi bağlanmalıdır. Bu işlem API anahtarını tarayıcı koduna koymamak için Vercel Functions veya ayrı bir backend endpoint’i gerektirir. API anahtarlarını GitHub’a ya da frontend dosyalarına yazma; Vercel Project Settings → Environment Variables bölümünü kullan.

## Sorun giderme

**Build fails** hatası görürsen önce yerel ortamda `pnpm install` ve `pnpm run build` komutlarını çalıştır. Vercel’de `Root Directory` değerinin proje kökü olduğundan ve `Output Directory` değerinin `dist/public` olduğundan emin ol.

Hero görseli artık proje içindeki `client/public/dark-smp-hero.webp` dosyasından servis edilir. Bu nedenle Manus’a özel görsel yolu kullanılmaz ve Vercel deploy’unda görselin kaybolması beklenmez.

## References

[1]: https://vercel.com/docs/frameworks/frontend/vite "Vite on Vercel"
[2]: https://vercel.com/docs/git/vercel-for-github "Vercel for GitHub"
[3]: https://vite.dev/guide/static-deploy "Vite Static Deployment Guide"
