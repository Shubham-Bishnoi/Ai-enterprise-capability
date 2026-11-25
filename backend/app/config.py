"""Runtime settings, read from the environment (and backend/.env if present)."""

import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv

BACKEND_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BACKEND_DIR / ".env")


def _flag(name: str, default: bool) -> bool:
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


@dataclass(frozen=True)
class Settings:
    model: str = os.getenv("EVOLVE_MODEL", "claude-opus-5-5")
    # Effort for the full proposal draft and for the short question round.
    effort: str = os.getenv("EVOLVE_EFFORT", "medium")
    questions_effort: str = os.getenv("EVOLVE_QUESTIONS_EFFORT", "low")
    # Live web research before drafting, so figures reflect current schemes.
    research: bool = _flag("EVOLVE_RESEARCH", True)
    # Server-side refusal fallbacks (beta). Disable if your account lacks access.
    fallbacks: bool = _flag("EVOLVE_FALLBACKS", True)
    data_dir: Path = Path(os.getenv("EVOLVE_DATA_DIR", str(BACKEND_DIR / "data" / "generated")))
    cors_origins: tuple[str, ...] = tuple(
        o.strip() for o in os.getenv("CORS_ORIGINS", "").split(",") if o.strip()
    )

    @property
    def ai_ready(self) -> bool:
        return bool(os.getenv("ANTHROPIC_API_KEY") or os.getenv("ANTHROPIC_AUTH_TOKEN"))


settings = Settings()
