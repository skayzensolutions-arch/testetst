-- Insert initial portfolio projects
INSERT INTO portfolio_projects (title, location, description, image, category, year, position) VALUES
('Resort-Style Pool Deck Installation', 'Jacksonville, FL', 'Complete pool deck transformation with beautiful multi-tone pavers creating a luxurious outdoor oasis.', '/images/pool-deck-1.jpg', 'Pool Area', '2024', 0),
('Custom Pool Deck with Accent Pavers', 'Jacksonville, FL', 'Stunning pool deck featuring mixed paver patterns with charcoal and tan tones for visual interest.', '/images/pool-deck-2.jpg', 'Pool Area', '2024', 1),
('Pool Deck with Designer Pattern', 'Jacksonville, FL', 'Beautiful pool area with carefully selected paver colors and professional installation creating a resort feel.', '/images/pool-deck-3.jpg', 'Pool Area', '2024', 2),
('Custom Freeform Pool Deck', 'Jacksonville, FL', 'Elegant custom-shaped pool surrounded by premium paver installation with multi-color design.', '/images/pool-deck-4.jpg', 'Pool Area', '2024', 3),
('Modern Driveway with Retaining Wall', 'Jacksonville, FL', 'Professional driveway installation featuring concrete pavers with integrated retaining wall and steps.', '/images/driveway-1.jpg', 'Driveway', '2024', 4),
('Professional Paver Repair & Restoration', 'Jacksonville Beach, FL', 'Expert repair and restoration bringing damaged pavers back to their original beauty with complete releveling.', '/images/portfolio-repair-before-after.jpg', 'Repair', '2024', 5)
ON CONFLICT DO NOTHING;
