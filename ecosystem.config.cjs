module.exports = {
  apps: [
    {
      name: "arzan-admin",
      script: "node_modules/vite/bin/vite.js",
      args: "preview --port 3000",
      exec_mode: "cluster",
      instances: "2",
      autorestart: true,
      merge_logs: true,
      log_date_format: "YYYY-MM-DDTHH:mm:ss.sssZ"
    }
  ]
};
