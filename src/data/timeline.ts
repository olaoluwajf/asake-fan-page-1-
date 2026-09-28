export interface TimelineEntry {
  id: string
  year: string
  title: string
  description: string
}

export const timeline: TimelineEntry[] = [
  {
    id: 't1',
    year: '2018',
    title: 'Early releases',
    description: 'First singles begin circulating in Lagos, built on Fuji-inflected hooks and street chants.',
  },
  {
    id: 't2',
    year: '2020',
    title: 'Ololade Asake',
    description: 'The debut EP introduces the name and sound to a wider Nigerian audience.',
  },
  {
    id: 't3',
    year: '2022',
    title: 'Mr. Money With The Vibe',
    description: 'The debut album, propelled by "Sungba" and "Peace Be Unto You," marks the international breakout.',
  },
  {
    id: 't4',
    year: '2023',
    title: 'Work Of Art',
    description: 'The sophomore album debuts inside the UK Top 5 and further defines a signature street-Amapiano sound.',
  },
  {
    id: 't5',
    year: '2024+',
    title: 'Lungu Boy and beyond',
    description: 'A third album and a run of global collaborations and festival stages carry the sound further afield.',
  },
]
