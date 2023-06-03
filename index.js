"use strict";
// A function that sends a new email reply on the ticket to customer's email address
const axios = require('axios');
const authorizationToken = 'Basic a292YWxlbmtvb2xlMTJAZ21haWwuY29tOjQyMDk0NjNmODM2YThjZjk4ODgzNmViNzgzM2U1YTljNzk1NzVkY2JlMzYxMGIyNDJlMWUyNWFiOWE2YzhlNjA=';
const ticket_id = 39144077;

const sendEmail = {
    method: 'POST',
    url: `https://ole2-store.gorgias.com/api/tickets/${ticket_id}/messages?action=retry`,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: authorizationToken
    },
    data: {
      channel: 'email',
      receiver: {id: 106510022},
      sender: {id: 106507816},
      source: {
        to: [{address: 'okovalenko070@gmail.com', name: 'Oleg Kovalenko'}],
        from: {name: 'Gorgias Bot', address: 'pqe41g424pd58yl3@email.gorgias.com'},
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
      console.error(error);
    });

