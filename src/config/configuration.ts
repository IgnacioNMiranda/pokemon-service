export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  env: process.env.NODE_ENV || 'development',
});
