export interface Album {
  id: string
  title: string
  year: number
  trackCount: number
  cover: string
}

export const albums: Album[] = [
  {
    id: 'lungu-boy',
    title: 'Lungu Boy',
    year: 2024,
    trackCount: 16,
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RsG_54nL5UA3N8WaT3PgE93ghhNXo7hj8F1SKm5kpz4Sp_4o1xa4w3Q&s=10',
  },
  {
    id: 'work-of-art',
    title: 'Work Of Art',
    year: 2023,
    trackCount: 15,
    cover: 'https://i.scdn.co/image/ab67616d0000b2737e2b5827ffc185e44c3e6ef0',
  },
  {
    id: 'mmwtv',
    title: 'Mr. Money With The Vibe',
    year: 2022,
    trackCount: 15,
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlhALb4ZZeNTLOCErDvJJRQJmNY5v8BTQOEzrhrWpksT-vnxL9edCC4E&s=10',
  },
  {
    id: 'ep-ololade',
    title: 'Ololade Asake',
    year: 2020,
    trackCount: 6,
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdZB285lzs5KCTus8r_Ol83E2yMNfUbv9bOokC1slNA&s=10',
  },
]
