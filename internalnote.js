"use strict";
// A function that automatically leaves an internal note on the ticket
const axios = require('axios');
const authorizationToken = 'Basic a292YWxvbGVnazE4QGdtYWlsLmNvbTpiZjBmNDczYzM3YWRjYWI4ZWUyZTBhMjY4YjRlMGM2MzcxM2NlNjBhNzQxZmNmNWVkZmExOTdmNTRlNzRiMjEw';
const ticket_id = 39159802;

const sendInternalNote = {
    method: 'POST',
    url: `https://oleg-store02.gorgias.com/api/tickets/${ticket_id}/messages?action=retry`,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: authorizationToken
    },
    data: {
        channel: 'internal-note',
        sender: {id: 106537190, email: 'kovalolegk18@gmail.com'},
        source: {type: 'internal-note'},
        via: 'internal-note',
        body_html: 'Hello, Internal note test    internal note test final',
        from_agent: false,
    }
  };
  
  axios
    .request(sendInternalNote)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error.message);
    });
