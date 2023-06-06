
export default function(e, apiKey, clientId, clientSecret, dimAppName, dimApiKey) {
  e.preventDefault();
  if (apiKey && clientId && clientSecret && dimAppName && dimApiKey) {
    localStorage.setItem('apiKey', apiKey);
    localStorage.setItem('oauthClientId', clientId);
    localStorage.setItem('oauthClientSecret', clientSecret);
    localStorage.setItem('dimAppName', dimAppName);
    localStorage.setItem('dimApiKey', dimApiKey);
    localStorage.removeItem('dimApiToken');
    localStorage.removeItem('authorization');
    window.location.href = window.location.origin;
  } else {
    alert('You need to fill in the whole form');
  }
}

