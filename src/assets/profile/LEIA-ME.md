# Foto profissional

Salve aqui a sua foto (recomendado: `riquelme.webp`, retrato vertical, mínimo 1000px de altura,
de preferência com fundo escuro ou recortada).

Depois, em `src/data/profile.ts`:

```ts
import photo from '@/assets/profile/riquelme.webp'
// ...
photo: photo,
```

Enquanto `photo` estiver vazio, o site mostra uma composição abstrata provisória com o monograma RT.
