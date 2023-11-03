#!/usr/bin/env node
import adventure from 'adventure'
import * as TestProblem from './problems/test.js'

const shop = adventure({
  name: 'learnyouw3up',
  title: '⁂ LEARN YOU THE W3UP FOR MUCH WIN!',
  bg: 'magenta'
})

shop.add('Introduction: UCAN do it!', () => TestProblem)
shop.add('Storing cat gifs for fun and gossip', () => TestProblem)
shop.add('Delegation, invocation and procrastination', () => TestProblem)
shop.add('Infinite avatar compression!', () => TestProblem)
shop.add('Memes for my eyes', () => TestProblem)
shop.add('DUDE, WHERE\'S MY CAR?', () => TestProblem)
shop.add('CommP at the edge or die trying', () => TestProblem)
shop.add('Revocation station', () => TestProblem)

shop.execute(process.argv.slice(2))
