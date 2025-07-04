#!/usr/bin/env node
import adventure from 'adventure'
import * as IntroductionProblem from './problems/0-introduction/index.js'
import * as SpaceOutProblem from './problems/1-space-out/index.js'
import * as CatMemesProblem from './problems/2-cat-memes/index.js'
import * as DelegationProblem from './problems/3-delegation/index.js'
import * as InfiniteCompressionProblem from './problems/4-infinite-compression/index.js'
import * as MemesProblem from './problems/5-memes/index.js'
import * as DudeWhereProblem from './problems/6-dude-where/index.js'
import * as CommPProblem from './problems/7-commp/index.js'
// import * as PlaceholderProblem from './problems/placeholder/index.js'

const shop = adventure({
  name: 'learnyouw3up',
  title: '🐔 LEARN YOU THE W3UP FOR MUCH WIN!',
  bg: 196,
  fg: 255
})

shop.add('Introduction: UCAN do it!', () => IntroductionProblem)
shop.add('Lets space out', () => SpaceOutProblem)
shop.add('Storing cat memes for fun and gossip', () => CatMemesProblem)
shop.add('Delegation, invocation and procrastination', () => DelegationProblem)
shop.add('Infinite avatar compression!', () => InfiniteCompressionProblem)
shop.add('Memes for my eyes', () => MemesProblem)
shop.add('DUDE, WHERE\'S MY CAR?', () => DudeWhereProblem)
shop.add('CommP at the edge or die trying', () => CommPProblem)
// shop.add('Revocation station', () => PlaceholderProblem)

shop.execute(process.argv.slice(2))
