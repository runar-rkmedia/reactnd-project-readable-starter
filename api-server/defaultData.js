const posts = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  "b1cb3fd8-c854-11e7-abc4-cec278b6b50a": {
    id: 'b1cb3fd8-c854-11e7-abc4-cec278b6b50a',
    timestamp: 1468479767190,
    title: 'Markdown supported',
    body: `
# Markdown is _awesome_

Just ask these guys:

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
`,
    author: 'Runar',
    category: 'udacity',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  "b1cb3d44-c854-11e7-abc4-cec278b6b50a": {
    id: 'b1cb3d44-c854-11e7-abc4-cec278b6b50a',
    timestamp: 1542100991000,
    title: "I'm a post from the future",
    body: `
# Hold on to your flux-capacitor!

![Flux](http://www.tshirtlaundry.com/assets/images/photos/Flux6-14-2011-2.jpg)
`,
    author: 'Jimmy',
    category: 'udacity',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  "b1cb494c-c854-11e7-abc4-cec278b6b50a": {
    id: 'b1cb494c-c854-11e7-abc4-cec278b6b50a',
    timestamp: -76366766209000,
    title: "Missing the old times?",
    body: `
# A long time ago

![Storify](http://imgc.allpostersimages.com/images/P-473-488-90/53/5393/EGNJG00Z/posters/payne-athens-crowning-glory-from-the-golden-age.jpg)
`,
    author: 'Runar',
    category: 'udacity',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
};

const comments = {
  "894tuq4ut84ut8v4t8wun89g": {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  },
  "8tu4bsun805n8un48ve89": {
    id: '8tu4bsun805n8un48ve89',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  }
};

const categories = {
  categories: [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      },
      {
        name: 'udacity',
        path: 'udacity'
      }
  ]
}

module.exports = { posts, comments, categories }
