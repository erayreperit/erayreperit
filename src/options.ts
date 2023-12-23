import { readFileSync } from 'fs'
import { SatoriOptions } from 'satori'

const DMSans = Buffer.from(readFileSync('./assets/fonts/DMSans-Regular.otf', { encoding: 'binary' }), 'binary'),
  DMSansBlack = Buffer.from(readFileSync('./assets/fonts/DMSans-Black.otf', { encoding: 'binary' }), 'binary')

export default {
  width: 512,
  height: 512,
  fonts: [
    {
      name: 'DM Sans',
      data: DMSans,
      weight: 400,
    },
    {
      name: 'DM Sans',
      data: DMSansBlack,
      weight: 900,
    }
  ]
} satisfies SatoriOptions