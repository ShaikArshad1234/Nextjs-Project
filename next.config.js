// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api',
          destination: 'http://localhost:3000' // Adjust the backend URL and port
        }
      ];
    }
  };
  