#!/usr/bin/env node
import adventure from 'adventure'
import * as IntroductionProblem from './problems/introduction/index.js'
import * as SpaceOutProblem from './problems/space-out/index.js'
import * as PlaceholderProblem from './problems/placeholder.js'

const shop = adventure({
  name: 'learnyouw3up',
  title: '⁂ LEARN YOU THE W3UP FOR MUCH WIN!',
  bg: 'magenta'
})

shop.add('Introduction: UCAN do it!', () => IntroductionProblem)
shop.add('Lets space out', () => SpaceOutProblem)
shop.add('Storing cat gifs for fun and gossip', () => PlaceholderProblem)
shop.add('Delegation, invocation and procrastination', () => PlaceholderProblem)
shop.add('Infinite avatar compression!', () => PlaceholderProblem)
shop.add('Memes for my eyes', () => PlaceholderProblem)
shop.add('DUDE, WHERE\'S MY CAR?', () => PlaceholderProblem)
shop.add('CommP at the edge or die trying', () => PlaceholderProblem)
shop.add('Revocation station', () => PlaceholderProblem)

shop.execute(process.argv.slice(2))
