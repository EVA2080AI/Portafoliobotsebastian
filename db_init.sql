CREATE TABLE IF NOT EXISTS experience (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    period TEXT,
    role_es TEXT,
    role_en TEXT,
    company TEXT,
    desc_es TEXT,
    desc_en TEXT,
    details_es TEXT, -- JSON array
    details_en TEXT  -- JSON array
);

CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    tags TEXT,
    img TEXT,
    link TEXT
);

CREATE TABLE IF NOT EXISTS stack (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    icon TEXT
);

-- Seed Data (Shortened for brevity, matching app.js)
INSERT INTO experience (period, role_es, role_en, company, desc_es, desc_en, details_es, details_en) VALUES 
('2024 - Present', 'Product Design Director', 'Product Design Director', 'Dexio Technologies', 'Dirección estratégica de plataformas B2B.', 'Strategic direction of B2B platforms.', '["Liderazgo AI-DLC", "Automatización n8n"]', '["AI-DLC Leadership", "n8n Automation"]');

INSERT INTO projects (title, tags, img, link) VALUES 
('Framework Bill Search', 'B2B / FinTech', 'https://eva2080ai.github.io/Portafoliobotsebastian/p9.jpg', 'https://behance.net/masmela'),
('Green City APP', 'UX Research', 'https://eva2080ai.github.io/Portafoliobotsebastian/p1.jpg', 'https://behance.net/masmela');

INSERT INTO stack (name, icon) VALUES 
('Strategy (PO/PM)', 'fas fa-chess'),
('AI-DLC', 'fas fa-robot');
