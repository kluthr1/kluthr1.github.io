CREATE TABLE IF NOT EXISTS visits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  path TEXT NOT NULL,
  target TEXT,
  seconds INTEGER,
  occurred_at TEXT NOT NULL,
  ip_address TEXT,
  country TEXT,
  region TEXT,
  city TEXT,
  asn INTEGER,
  network TEXT,
  user_agent TEXT,
  referrer TEXT,
  source TEXT
);
CREATE INDEX IF NOT EXISTS visits_occurred_at_idx ON visits (occurred_at DESC);
