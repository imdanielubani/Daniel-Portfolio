from pathlib import Path
import shutil

from reportlab.lib.colors import Color, HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PDF = ROOT / "output" / "pdf" / "Daniel-Ubani-Resume.pdf"
PUBLIC_PDF = ROOT / "public" / "resume" / "Daniel-Ubani-Resume.pdf"

INK = HexColor("#111111")
ORANGE = HexColor("#FF5B00")
LIME = HexColor("#C4F135")
PAPER = HexColor("#F2F2F0")
MID = HexColor("#565656")
LINE = HexColor("#C9C9C5")
WHITE = HexColor("#FFFFFF")

EXPERIENCE = [
    ("2026", "Pavocard / Retiro Del Rocio / Cviqli", "Full Stack Software Engineer", "Architecting multi-surface systems across fintech, hospitality, civic AI, mobile, and real-time infrastructure."),
    ("2025", "Cardcentrals", "Full Stack Engineer", "Worked across gift card trading clients, APIs, data, and administration."),
    ("2025", "Zicstack", "Full Stack Engineer", "Built production product flows and reusable engineering foundations."),
    ("2024", "Orion Networks", "Software Engineer", "Delivered integrated application features across client and server surfaces."),
    ("2024", "Kedali NEMT", "Full Stack Engineer", "Developed systems supporting non-emergency medical transportation operations."),
    ("2022", "NDA Organization", "Software Engineer", "Built and supported production software across core organizational workflows."),
]

CAPABILITIES = [
    "System architecture",
    "API design",
    "Database modelling",
    "Web applications",
    "Mobile applications",
    "Real-time systems",
    "AI integrations",
    "Payments and deployment",
]

SELECTED_SYSTEMS = [
    ("Retiro Del Rocio", "Hospitality operations ecosystem"),
    ("Cviqli", "AI-powered civic intelligence"),
    ("Pavocard", "Multi-market fintech infrastructure"),
    ("Cardcentrals", "Digital commerce and gift cards"),
    ("Nexryl EstateOS", "Property technology platform"),
]


def paragraph(c, text, x, y_top, width, style):
    item = Paragraph(text, style)
    _, height = item.wrap(width, 1000)
    item.drawOn(c, x, y_top - height)
    return y_top - height


def label(c, text, x, y):
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 7.2)
    c.drawString(x, y, text.upper())


def build_resume():
    OUTPUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_PDF.parent.mkdir(parents=True, exist_ok=True)

    width, height = A4
    c = canvas.Canvas(str(OUTPUT_PDF), pagesize=A4)
    c.setTitle("Daniel Ubani - Full Stack Software Engineer Resume")
    c.setAuthor("Daniel Ubani")
    c.setSubject("Full Stack Software Engineering Resume")

    c.setFillColor(PAPER)
    c.rect(0, 0, width, height, fill=1, stroke=0)

    header_height = 154
    c.setFillColor(INK)
    c.rect(0, height - header_height, width, header_height, fill=1, stroke=0)
    c.setFillColor(ORANGE)
    c.rect(0, height - header_height, width, 5, fill=1, stroke=0)

    margin = 36
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 30)
    c.drawString(margin, height - 50, "DANIEL UBANI")
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(margin, height - 72, "FULL STACK SOFTWARE ENGINEER / SYSTEMS BUILDER")

    c.setFillColor(Color(1, 1, 1, alpha=0.68))
    c.setFont("Helvetica", 8.2)
    c.drawString(margin, height - 98, "Abuja, Nigeria")
    c.drawString(margin + 94, height - 98, "imdanielubani@gmail.com")
    c.drawString(margin + 255, height - 98, "linkedin.com/in/imdanielubani")

    c.setFillColor(LIME)
    c.circle(margin + 3, height - 126, 2.4, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(margin + 12, height - 129, "AVAILABLE FOR REMOTE / HYBRID / ONSITE OPPORTUNITIES")

    body_top = height - header_height - 25
    gutter = 26
    right_width = 165
    left_width = width - (2 * margin) - gutter - right_width
    right_x = margin + left_width + gutter

    summary_style = ParagraphStyle(
        "summary",
        fontName="Helvetica",
        fontSize=9.2,
        leading=12.5,
        textColor=MID,
        alignment=TA_LEFT,
    )
    body_style = ParagraphStyle(
        "body",
        fontName="Helvetica",
        fontSize=7.7,
        leading=10.2,
        textColor=MID,
        alignment=TA_LEFT,
    )

    label(c, "Profile", margin, body_top)
    y = paragraph(
        c,
        "I design, architect, and ship production systems across web, mobile, AI, fintech, hospitality, logistics, and real-time infrastructure.",
        margin,
        body_top - 14,
        left_width,
        summary_style,
    )

    y -= 19
    c.setStrokeColor(LINE)
    c.line(margin, y, margin + left_width, y)
    y -= 20
    label(c, "Experience", margin, y)
    y -= 15

    for year, company, role, contribution in EXPERIENCE:
        c.setFillColor(ORANGE)
        c.setFont("Helvetica-Bold", 7.5)
        c.drawString(margin, y, year)

        company_x = margin + 42
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 9.3)
        company_text = company.upper()
        if stringWidth(company_text, "Helvetica-Bold", 9.3) > left_width - 42:
            c.setFont("Helvetica-Bold", 8.1)
        c.drawString(company_x, y, company_text)

        c.setFillColor(MID)
        c.setFont("Helvetica-Bold", 7.1)
        c.drawString(company_x, y - 12, role.upper())
        y = paragraph(c, contribution, company_x, y - 18, left_width - 42, body_style)
        y -= 13

    c.setStrokeColor(LINE)
    c.line(right_x - gutter / 2, body_top + 5, right_x - gutter / 2, 42)

    ry = body_top
    label(c, "Core capabilities", right_x, ry)
    ry -= 17
    for index, capability in enumerate(CAPABILITIES, start=1):
        c.setFillColor(ORANGE)
        c.setFont("Helvetica-Bold", 6.6)
        c.drawString(right_x, ry, f"{index:02d}")
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 8.3)
        c.drawString(right_x + 24, ry, capability.upper())
        ry -= 22

    ry -= 5
    c.setStrokeColor(LINE)
    c.line(right_x, ry, width - margin, ry)
    ry -= 21
    label(c, "Selected systems", right_x, ry)
    ry -= 18

    for index, (name, description) in enumerate(SELECTED_SYSTEMS, start=1):
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 8.5)
        c.drawString(right_x, ry, name.upper())
        c.setFillColor(MID)
        c.setFont("Helvetica", 7.2)
        ry = paragraph(c, description, right_x, ry - 7, right_width, body_style)
        ry -= 13

    c.setStrokeColor(INK)
    c.line(margin, 34, width - margin, 34)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(margin, 20, "I BUILD DIGITAL SYSTEMS THAT SCALE.")
    c.setFont("Helvetica", 7)
    c.drawRightString(width - margin, 20, "daniel-portfolio.vercel.app")

    c.save()
    shutil.copy2(OUTPUT_PDF, PUBLIC_PDF)
    print(OUTPUT_PDF)
    print(PUBLIC_PDF)


if __name__ == "__main__":
    build_resume()
