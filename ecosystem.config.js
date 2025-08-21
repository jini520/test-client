module.exports = {
  apps: [
    {
      name: "test-client",
      script: "pnpm",
      args: "start",
      cwd: "/home/jinni/test/test-client",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
