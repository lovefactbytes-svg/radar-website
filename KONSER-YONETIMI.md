# Konser Yönetimi Rehberi

Bu dosya, web sitenizde konser eklemek, düzenlemek ve silmek için kullanacağınız rehberdir.

## Konser Ekleme

1. `data/concerts.ts` dosyasını açın
2. `concerts` dizisine yeni bir konser objesi ekleyin:

\`\`\`typescript
{
  id: "7", // Benzersiz bir ID verin
  date: "10 NİSAN 2025", // Tarih (büyük harflerle)
  venue: "Mekan Adı", // Konser mekanı
  city: "Şehir, Türkiye", // Şehir
  status: "tickets", // "tickets" veya "sold out"
  ticketLink: "https://biletix.com/...", // Opsiyonel: Bilet linki
}
\`\`\`

## Konser Düzenleme

1. `data/concerts.ts` dosyasını açın
2. Düzenlemek istediğiniz konseri bulun
3. İstediğiniz alanları değiştirin

## Konser Silme

1. `data/concerts.ts` dosyasını açın
2. Silmek istediğiniz konser objesini tamamen silin

## Konser Durumu

- `status: "tickets"` - Biletler satışta
- `status: "sold out"` - Biletler tükendi

## Örnek

\`\`\`typescript
{
  id: "8",
  date: "15 MAYIS 2025",
  venue: "Açıkhava Tiyatrosu",
  city: "İstanbul, Türkiye",
  status: "tickets",
  ticketLink: "https://biletix.com/etkinlik/12345",
}
\`\`\`

## Notlar

- Her konserin benzersiz bir `id` değeri olmalı
- Tarihleri büyük harflerle yazın (örn: "15 MART 2025")
- `ticketLink` opsiyoneldir, eklemezseniz buton sadece görsel olur
- Konserleri tarih sırasına göre dizmeniz önerilir
