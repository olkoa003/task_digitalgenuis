"use strict";
// A function that sends a new email reply on the ticket to customer's email address
const axios = require('axios');
const authorizationToken = 'Basic bWFyY2VsYXZsYWRpY2FAZ21haWwuY29tOjY0MTdkNTg0MmZmODYzN2YzZWZhZDI0ZDI3YWY3ZTYwYmQ2ZGZlMjJmZGM4OGZiMGJmMzc5ZWRjYTY1NmFjZWM=';
const ticket_id = 40108485;
let receiverId;

// A func that retrieves a receiverId that is then utilized in the POST method
const getOptions = {
  method: 'GET',
  url: `https://test-090623.gorgias.com/api/tickets/${ticket_id}`,
  headers: {
    accept: 'application/json',
    authorization: authorizationToken
  }
};

axios
  .request(getOptions)
  .then(function (response) {
    let receiverId = response.data.requester.id
    console.log(receiverId)
  })
  .catch(function (error) {
    console.error(error.message);
  });


const sendEmail = {
    method: 'POST',
    url: `https://test-090623.gorgias.com/api/tickets/${ticket_id}/messages?action=retry`,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: authorizationToken
    },
    data: {
      channel: 'email',
      receiver: {id: receiverId},
      sender: {id: 108580135},
      source: {
        to: [{address: 'marcelavladica@gmail.com', name: 'Test_0906'}],
        from: {name: 'Gorgias Bot', address: 'nxy04g6r7xjgzqm2@email.gorgias.com'},
        type: 'email'
      },
      via: 'api',
      body_html: 'Hello, Oleg!!!!!,<br><br>\n\n        I can\'t place an order on your site, it says: I don\'t have enough credit.<br>\n        How can I add some credits?<br><br>\n\n        Cheers,<br>\n        John Doe\n        ',
      body_text: 'Hello, Oleg!!!!! Hello,\n\n        I can\'t place an order on your site, it says: I don\'t have enough credit.\n        How can I add some credits?\n\n        Cheers,\n        John Doe\n        ',
      message_id: '<123345676453.2445.234@web>',
      sent_datetime: null,
      subject: 'Re:Integration Test (new email task - DigitalGenuis)',
      from_agent: true
    }
  };
  
  axios
    .request(sendEmail)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error.message);
    });




