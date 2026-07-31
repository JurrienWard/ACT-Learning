#!/usr/bin/env python3
"""Generate ACT Genie Manim animations from a reliable scene module."""
from pathlib import Path

OUT_DIR = Path("/home/jurrien/Projects/act-genie/animations")
OUT_DIR.mkdir(parents=True, exist_ok=True)

TMP = Path("/tmp/act_scenes.py")
TMP.write_text("""from manim import *
import random
import numpy as np

class LinearEquationScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Solving Linear Equations", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        eq = MathTex("3x + 5 = 20", font_size=36).move_to(UP*1.2)
        self.play(FadeIn(eq))
        step1 = MathTex("3x = 15", font_size=36, color=BLUE).next_to(eq, DOWN, buff=1.0)
        step2 = MathTex("x = 5", font_size=36, color=GREEN).next_to(step1, DOWN, buff=1.0)
        self.play(Write(step1)); self.wait(0.8)
        self.play(Write(step2)); self.wait(1.5)
        tip = Text("Whatever you do to one side, do to the other.", font_size=20, color=BLACK).to_edge(DOWN, buff=1.0)
        box = RoundedRectangle(corner_radius=12, width=10, height=1.4, color=GREEN, fill_opacity=0.08).surround(tip)
        self.play(Create(box), FadeIn(tip)); self.wait(2)
        self.play(*[FadeOut(m) for m in self.mobjects])

class SlopeScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Slope = Rise / Run", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        axes = Axes(x_range=[-1,6,1], y_range=[-1,6,1], x_length=7, y_length=5, color=GREY_A).to_edge(DOWN, buff=0.4)
        labels = axes.get_axis_labels(x_label="x", y_label="y")
        line = axes.plot(lambda x: 0.8*x+1, x_range=[0,5], color=BLUE)
        p1 = Dot(axes.c2p(1,1.8), color=RED)
        p2 = Dot(axes.c2p(4,4.2), color=RED)
        rise = DashedLine(axes.c2p(1,1.8), axes.c2p(1,4.2), color=GREEN)
        run = DashedLine(axes.c2p(1,4.2), axes.c2p(4,4.2), color=YELLOW)
        self.play(Create(axes), Write(labels)); self.play(Create(line)); self.play(FadeIn(p1), FadeIn(p2))
        self.play(Create(rise), Create(run))
        self.play(Write(MathTex("m = 2.4/3 = 0.8", font_size=28, color=BLACK).to_edge(UP, buff=1.6)))
        self.wait(2)
        self.play(FadeOut(Group(*self.mobjects)))

class QuadraticsScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Factoring Quadratics", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        expr = MathTex("x^2 + 7x + 12", font_size=36).move_to(UP*1.0)
        self.play(FadeIn(expr))
        hint = Text("Find two numbers that multiply to 12 and add to 7", font_size=20, color=BLUE).to_edge(DOWN, buff=2.0)
        self.play(FadeIn(hint))
        self.play(Write(MathTex("3 \\times 4 = 12", font_size=28, color=GREEN).next_to(hint, UP, buff=0.5)))
        self.play(Write(MathTex("3 + 4 = 7", font_size=28, color=GREEN).next_to(hint, UP, buff=0.5).shift(RIGHT*2.2)))
        factors = MathTex("(x + 3)(x + 4)", font_size=36, color=GREEN).next_to(expr, DOWN, buff=1.5)
        self.play(Write(factors)); self.wait(1.5)
        self.play(FadeOut(Group(*self.mobjects)))

class TrianglesScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Triangles: Area = 1/2 × base × height", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        tri = Triangle(color=BLUE, fill_opacity=0.2).scale(1.4).to_edge(DOWN, buff=1.0)
        self.play(DrawBorderThenFill(tri))
        base = MathTex("b", font_size=24, color=GREEN).next_to(tri, DOWN, buff=0.3)
        height = MathTex("h", font_size=24, color=RED).next_to(tri, LEFT, buff=0.3)
        area = MathTex("A = \\frac{1}{2}bh", font_size=34).to_edge(UP, buff=1.6)
        self.play(Write(base), Write(height), Write(area))
        self.wait(2)
        self.play(FadeOut(Group(*self.mobjects)))

class TextScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("ACT English Tip", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        examples = VGroup(
            Text("✓  I walked home, and I ate dinner.", font_size=22, color=GREEN),
            Text("✗  I walked home, I ate dinner.", font_size=22, color=RED),
            Text("Fix: period OR semicolon OR comma+FANBOYS", font_size=20, color=BLUE),
        ).arrange(DOWN, buff=0.5).to_edge(DOWN, buff=1.6)
        self.play(FadeIn(examples)); self.wait(3)
        self.play(FadeOut(Group(*self.mobjects)))

class InequalityScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Graphing Inequalities", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        axes = Axes(x_range=[-4,4,1], y_range=[-4,4,1], x_length=8, y_length=5, color=GREY_A).to_edge(DOWN, buff=0.4)
        line = axes.plot(lambda x: 2*x+1, x_range=[-1.5,2.5], color=BLUE)
        region = axes.get_area(
            axes.plot(lambda x: -100, x_range=[-4,4]),
            bounded_graph=axes.plot(lambda x: 2*x+1, x_range=[-1.5,2.5]),
            color=BLUE, opacity=0.15,
        )
        self.play(Create(axes), Create(line), FadeIn(region))
        self.play(Write(MathTex("y > 2x + 1", font_size=36).to_edge(UP, buff=1.6)))
        self.wait(2)
        self.play(FadeOut(Group(*self.mobjects)))

class CirclesScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Circles: Standard Form", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        circle = Circle(radius=2, color=BLUE, fill_opacity=0.15).to_edge(DOWN, buff=0.8)
        center = Dot(circle.get_center(), color=RED)
        r = Line(circle.get_center(), circle.point_at_angle(0), color=GREEN)
        self.play(DrawBorderThenFill(circle), FadeIn(center), Create(r))
        self.play(Write(MathTex("(x - h)^2 + (y - k)^2 = r^2", font_size=34).to_edge(UP, buff=1.6)))
        self.wait(2)
        self.play(FadeOut(Group(*self.mobjects)))

class SOHCAHTOAScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("SOH-CAH-TOA", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        tri = Polygon([-1,-1.5,0], [1,-1.5,0], [-1,1.5,0], color=BLUE, fill_opacity=0.25).to_edge(DOWN, buff=0.8)
        labels = VGroup(
            MathTex("opp", color=RED, font_size=22).next_to(tri, RIGHT).shift(UP*0.3),
            MathTex("adj", color=GREEN, font_size=22).next_to(tri, DOWN),
            MathTex("hyp", color=YELLOW, font_size=22).next_to(tri.get_top(), UP).shift(RIGHT*0.4),
        )
        box = VGroup(
            MathTex("\\sin = opp/hyp", color=RED, font_size=26),
            MathTex("\\cos = adj/hyp", color=GREEN, font_size=26),
            MathTex("\\tan = opp/adj", color=YELLOW, font_size=26),
        ).arrange(DOWN, buff=0.4).to_edge(UP, buff=1.4)
        self.play(DrawBorderThenFill(tri)); self.play(Write(labels)); self.play(FadeIn(box))
        self.wait(3); self.play(FadeOut(Group(*self.mobjects)))

class AbsoluteValueScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Absolute Value Equations", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        eq = MathTex("|2x - 1| = 5", font_size=36).move_to(UP*1.0)
        self.play(FadeIn(eq))
        c1 = MathTex("2x - 1 = 5 \\Rightarrow x = 3", font_size=30, color=GREEN).to_edge(LEFT, buff=1.0).shift(DOWN*1.2)
        c2 = MathTex("2x - 1 = -5 \\Rightarrow x = -2", font_size=30, color=RED).to_edge(RIGHT, buff=1.0).shift(DOWN*1.2)
        arrows = VGroup(
            Arrow(eq.get_bottom()+LEFT*0.5, c1.get_top()+LEFT*0.2, buff=0.2, color=GREEN),
            Arrow(eq.get_bottom()+RIGHT*0.5, c2.get_top()+RIGHT*0.2, buff=0.2, color=RED),
        )
        self.play(Create(arrows), FadeIn(c1), FadeIn(c2)); self.wait(2)
        self.play(FadeOut(Group(*self.mobjects)))

class FunctionsScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Function Transformations", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        axes = Axes(x_range=[-4,4,1], y_range=[-4,4,1], x_length=7, y_length=5, color=GREY_A).to_edge(DOWN, buff=0.4)
        f1 = axes.plot(lambda x: x**2, x_range=[-2.2,2.2], color=BLUE)
        f2 = axes.plot(lambda x: x**2 + 2, x_range=[-2.2,2.2], color=RED)
        note = MathTex("f(x) + k \\rightarrow shift up by k", font_size=26, color=RED).to_edge(UP, buff=1.6)
        self.play(Create(axes), Create(f1)); self.wait(0.5)
        self.play(Create(f2), Write(note)); self.wait(2)
        self.play(FadeOut(Group(*self.mobjects)))

class ProbabilityScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Basic Probability", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        die = Square(side_length=1.4, color=WHITE, fill_opacity=0.9).set_stroke(BLACK).move_to(DOWN*0.5)
        num = Text("5", font_size=48, color=BLACK).move_to(die.get_center())
        self.play(FadeIn(Group(die, num))); self.wait(0.8)
        self.play(Write(MathTex("P(5) = \\frac{1}{6}", font_size=34, color=GREEN).to_edge(UP, buff=1.6))); self.wait(2)
        self.play(FadeOut(Group(*self.mobjects)))

class RatiosScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Ratios & Proportions", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        p = MathTex("\\frac{3}{2} = \\frac{15}{x}", font_size=36).move_to(UP*0.8)
        self.play(FadeIn(p))
        c = MathTex("3x = 30", font_size=34, color=BLUE).next_to(p, DOWN, buff=0.8)
        a = MathTex("x = 10", font_size=34, color=GREEN).next_to(c, DOWN, buff=0.6)
        self.play(Transform(p, c)); self.wait(0.8); self.play(FadeIn(a)); self.wait(1.5)
        self.play(FadeOut(Group(*self.mobjects)))

class StatsScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Mean vs Median", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        data = MathTex("2, 3, 5, 6, 100", font_size=32).move_to(UP*1.0)
        self.play(FadeIn(data))
        row = VGroup(
            MathTex("\\text{Mean}=23.2", color=RED, font_size=24),
            MathTex("\\text{Median}=5", color=GREEN, font_size=24),
        ).arrange(RIGHT, buff=1.0).to_edge(DOWN, buff=1.6)
        self.play(Write(row)); self.wait(1.5)
        self.play(FadeOut(Group(*self.mobjects)))

class CombinedLikeTermsScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Combining Like Terms", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        expr = MathTex("3x^2 + 5x - 2x^2 + 7x", font_size=34).move_to(UP*1.0)
        self.play(FadeIn(expr))
        g = MathTex("(3x^2 - 2x^2) + (5x + 7x)", font_size=32, color=BLUE).next_to(expr, DOWN, buff=0.8)
        r = MathTex("x^2 + 12x", font_size=34, color=GREEN).next_to(g, DOWN, buff=0.6)
        self.play(Write(g)); self.wait(0.8); self.play(Write(r)); self.wait(1.5)
        self.play(FadeOut(Group(*self.mobjects)))

class DiscriminantScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Quadratic Discriminant", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        d = MathTex("b^2 - 4ac", font_size=36).move_to(UP*0.8)
        self.play(FadeIn(d))
        cases = VGroup(
            MathTex("> 0 \\rightarrow 2 real roots", color=GREEN, font_size=24),
            MathTex("= 0 \\rightarrow 1 real root", color=BLUE, font_size=24),
            MathTex("< 0 \\rightarrow 0 real roots", color=RED, font_size=24),
        ).arrange(DOWN, buff=0.5).to_edge(DOWN, buff=1.6)
        self.play(FadeIn(cases)); self.wait(2.5)
        self.play(FadeOut(Group(*self.mobjects)))

class ScatterplotScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Scatterplots: Positive Correlation", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        axes = Axes(x_range=[0,10,1], y_range=[0,10,1], x_length=6, y_length=4, color=GREY_A).to_edge(DOWN, buff=0.4)
        pts = VGroup(*[Dot(axes.c2p(x, 0.6*x + 1 + random.uniform(-0.4, 0.4)), color=BLUE) for x in [1,2,3,4,5,6,7]])
        line = axes.plot(lambda x: 0.6*x+1, x_range=[1,7], color=RED)
        self.play(Create(axes), FadeIn(pts)); self.play(Create(line)); self.wait(2)
        self.play(FadeOut(Group(*self.mobjects)))

class FractionsScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Fractions, Decimals & Percents", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        eq = MathTex("\\frac{3}{4} = 0.75 = 75\\%", font_size=36).move_to(UP*0.8)
        self.play(FadeIn(eq))
        forms = VGroup(
            MathTex("dec: \\divide by denominator", color=BLUE, font_size=22),
            MathTex("% : \\times 100", color=GREEN, font_size=22),
        ).arrange(DOWN, buff=0.5).to_edge(DOWN, buff=1.6)
        self.play(FadeIn(forms)); self.wait(1.5)
        self.play(Write(MathTex("\\%\\Delta = \\frac{new - old}{old} \\times 100", font_size=28, color=RED).to_edge(UP, buff=1.6)))
        self.wait(2)
        self.play(FadeOut(Group(*self.mobjects)))

class ExponentScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Fractional Exponents = Roots", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        expr = MathTex("8^{2/3}", font_size=40).move_to(UP*1.0)
        self.play(FadeIn(expr))
        s1 = MathTex("= (\\sqrt[3]{8})^2", font_size=34, color=BLUE).next_to(expr, DOWN, buff=0.8)
        s2 = MathTex("= 2^2 = 4", font_size=34, color=GREEN).next_to(s1, DOWN, buff=0.5)
        self.play(Write(s1)); self.wait(0.6); self.play(Write(s2)); self.wait(1.5)
        self.play(FadeOut(Group(*self.mobjects)))

class NumTypesScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Number Types", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        items = VGroup(
            MathTex("3, -5, 0 \\rightarrow \\text{integers}", color=BLUE, font_size=24),
            MathTex("\\frac{1}{2} \\rightarrow \\text{rational}", color=GREEN, font_size=24),
            MathTex("\\pi, \\sqrt{2} \\rightarrow \\text{irrational}", color=RED, font_size=24),
        ).arrange(DOWN, buff=0.5).to_edge(DOWN, buff=1.6)
        self.play(FadeIn(items)); self.wait(1.5)
        self.play(Write(MathTex("(-2) \\times (-3) = +6", font_size=30, color=GREEN).to_edge(UP, buff=1.4)))
        self.wait(2.5)
        self.play(FadeOut(Group(*self.mobjects)))

class PEMDASScene(Scene):
    def construct(self):
        self.camera.background_color = "#f5f6f8"
        title = Text("Order of Operations: PEMDAS", font_size=28, color=BLACK).to_edge(UP)
        self.play(Write(title))
        expr = MathTex("3 + 4 \\times 2", font_size=36).move_to(UP*0.8)
        self.play(FadeIn(expr))
        s = MathTex("= 3 + 8", font_size=34, color=BLUE).next_to(expr, DOWN, buff=0.8)
        a = MathTex("= 11", font_size=34, color=GREEN).next_to(s, DOWN, buff=0.5)
        self.play(Write(s)); self.wait(0.6); self.play(Write(a)); self.wait(1)
        box = RoundedRectangle(corner_radius=12, width=9, height=1.1, color=RED, fill_opacity=0.08)
        tip = Text("Multiply BEFORE adding!", font_size=20, color=RED)
        tip.move_to(UP*-0.4)
        box.surround(tip)
        self.play(Create(box), FadeIn(tip)); self.wait(2)
        self.play(FadeOut(Group(*self.mobjects)))
""")

if __name__ == "__main__":
    import subprocess
    ok = []
    fail = []
    for cls in [
        "LinearEquationScene",
        "SlopeScene",
        "QuadraticsScene",
        "TrianglesScene",
        "CirclesScene",
        "SOHCAHTOAScene",
        "InequalityScene",
        "FunctionsScene",
        "AbsoluteValueScene",
        "TextScene",
        "ProbabilityScene",
        "RatiosScene",
        "StatsScene",
        "CombinedLikeTermsScene",
        "DiscriminantScene",
        "ScatterplotScene",
        "FractionsScene",
        "ExponentScene",
        "NumTypesScene",
        "PEMDASScene",
    ]:
        cmd = (
            f"cd {OUT_DIR} && "
            f"/tmp/manim-venv/bin/manim -qh --disable_caching --progress_bar=none -p {TMP} {cls}"
        )
        res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        ok.append(cls) if res.returncode == 0 else fail.append((cls, res.stderr[-200:]))
        print(f"{'OK' if res.returncode == 0 else 'FAIL'}  {cls}")
    print(f"Done: {len(ok)} ok, {len(fail)} failed")
    for cls, err in fail:
        print(f" - {cls}: {err}")
