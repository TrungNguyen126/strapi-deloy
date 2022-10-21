module.exports = ({ env }) => ({
  connection: {
    // Update your postgres credentials here
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "db-postgresql-sgp1-63858-do-user-6462393-0.b.db.ondigitalocean.com"),
      port: env.int("DATABASE_PORT", 25060),
      database: env("DATABASE_NAME", "defaultdb"),
      user: env("DATABASE_USERNAME", "doadmin"),
      password: env("DATABASE_PASSWORD", "AVNS_QRDmq0vhONQDm3T1rWM"),
      ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), },
    },
  },
});

