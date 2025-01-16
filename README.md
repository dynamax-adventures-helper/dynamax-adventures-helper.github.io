# dynamax-adventures-helper.github.io
Awesome tool to assist people with dynamax adventures hosted on Github Pages

Check it out here [https://dynamax-adventures-helper.github.io/](https://dynamax-adventures-helper.github.io/)

## Features
- Search/select a dynamax legendary you are going for
    - see its types, moves, weaknesses, and immunities
- Tier list of rental counters
    - SSS tier being 4x weakness move with STAB
    - SS tier being 4x weaknes move without STAB
    - S tier being 2x weakness move with STAB
    - A tier being 2x weakness move without STAB
- Clicking a Rental Pokemon
    - Shows types, name, and moveset


## Future improvements
- Update the select/dropdown to be a bit more intuitive
- Update UI around the Rental Counters
- Update more components to be in Storybook
- Better handling of support pokemon
- More advanced tier listing


## Stack
- React with Nextjs
- TailwindCSS for styling
- Storybook (in progress) for component design

## Data Collection
[Pokeapi](https://pokeapi.co/) was used to get type, moves, and pokemon.

[RotomLabs](https://rotomlabs.net/sword-shield/dynamax-adventures-types) was scraped to get which pokemon are in adventures and their moves

> Due to some of the data being scraped, it might not be 100% accurate

## Running
`npm run dev` for dev

`npm start` for normal use

## Future Enhancmens