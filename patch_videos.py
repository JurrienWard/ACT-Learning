#!/usr/bin/env python3
"""Patch act-genie index.html to embed local Manim videos by topic."""
from pathlib import Path

html = Path("/home/jurrien/Desktop/The Brain/Projects/act-genie/index.html").read_text()

# Map topic name -> expected manim output filename
MAP = {
    "Solving Linear Equations": "LinearEquationScene.mp4",
    "Slope of a Line": "SlopeScene.mp4",
    "Factoring Quadratics": "QuadraticsScene.mp4",
    "Triangles": "TrianglesScene.mp4",
    "Circles": "CirclesScene.mp4",
    "SOH-CAH-TOA": "SOHCAHTOAScene.mp4",
    "Graphing Inequalities": "InequalityScene.mp4",
    "Function Transformations": "FunctionsScene.mp4",
    "Absolute Value Equations": "AbsoluteValueScene.mp4",
    "ACT English Tip": "TextScene.mp4",
    "Basic Probability": "ProbabilityScene.mp4",
    "Ratios & Proportions": "RatiosScene.mp4",
    "Mean, Median, Mode & Range": "StatsScene.mp4",
    "Combining Like Terms": "CombinedLikeTermsScene.mp4",
    "Solving Quadratic Equations": "DiscriminantScene.mp4",
    "Scatterplots & Lines of Best Fit": "ScatterplotScene.mp4",
    "Fractions, Decimals & Percentages": "FractionsScene.mp4",
    "Exponents & Radicals": "ExponentScene.mp4",
    "Number Types & Properties": "NumTypesScene.mp4",
    "Order of Operations (PEMDAS)": "PEMDASScene.mp4",
}

# Inject video fields into topic objects that have mappings.
# We'll match topic objects via their name strings in the HTML text.
for name, fname in MAP.items():
    old = "{name:'" + name + "', diff:"
    new = "{name:'" + name + "', diff:"
    # We need to insert video before the closing } of topic object.
    # This script only adds video keys where the topic appears in data array.
    marker = "{name:'" + name + "', diff:"
    if marker not in html:
        continue
    # Only add if not already present
    if ", video:'" + fname + "'" in html:
        continue
    html = html.replace(
        marker,
        "{name:'" + name + "', video:'" + fname + "', diff:",
        1
    )

# Update renderTopicDetail to include video player when topic.video exists.
old_detail_block = '''      ${topic.khan ? `<a href="${topic.khan}" target="_blank" rel="noopener" class="yt-btn" style="background:#28a6b5">📚 Khan Academy Lesson</a>` : ''}
      <a href="https://www.youtube.com/results?search_query=${query}" target="_blank" rel="noopener" class="yt-btn">
        ▶ Watch Video Lessons on YouTube
      </a>'''

new_detail_block = '''      ${topic.video ? `<video controls style="width:100%;max-height:320px;border-radius:8px;margin-top:1rem;background:#000"><source src="/animations/${topic.video}" type="video/mp4"></video>` : ''}
      ${topic.khan ? `<a href="${topic.khan}" target="_blank" rel="noopener" class="yt-btn" style="background:#28a6b5">📚 Khan Academy Lesson</a>` : ''}
      <a href="https://www.youtube.com/results?search_query=${query}" target="_blank" rel="noopener" class="yt-btn">
        ▶ Watch Video Lessons on YouTube
      </a>'''

if old_detail_block in html:
    html = html.replace(old_detail_block, new_detail_block)
else:
    print("WARNING: target detail block not found")

Path("/home/jurrien/Desktop/The Brain/Projects/act-genie/index.html").write_text(html)
print("Patched index.html for inline animations.")
