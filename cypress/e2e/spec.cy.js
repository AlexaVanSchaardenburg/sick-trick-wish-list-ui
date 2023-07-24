//Write tests covering what should be displayed on the page when the user first visits.
describe('On page load', () => {
  it('Should display a title, a form, and three preloaded tricks', () => {
    //intercept the fetch
    //visit the page
    cy.visit('http://localhost:3000/')
    //test that the h1 is there
    cy.contains('h1', 'Sick Trick Wish List')
    //test that the form with all 4 inputs is there
    //test that there are three trick cards with the expected stances, names, obstacles, link title and links
  })
})

// //Write a test that checks that when data is put into the form, the value is reflected in that form input.
// describe('Filling out the form', () => {
//   it('should update a state for each input when the user changes that input to reflect whatever the user has entered', () => {
//     cy.visit('http://localhost:3000/')
//     //visit the page
//     //update the stance
//     //check the stance is updated in state
//     //update the name
//     //check the name is updated in state
//     //update the obstacle
//     //check the obstacle is updated in state
//     //update the tutorial link
//     //check the tutorial link is updated in state
//   })
// })

// //Write a test to check the user flow of adding a new trick to the DOM.
// describe('Adding a new trick', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000/')
//     //visit the page
//     //fillout the form with example data
//     //click submit button
//     //check that the page shows
//       //a new card
//       //that that card contains the data we input from the form including a stance, name, obstacle, tutorial link etc. 
//   })
// })