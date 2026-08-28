/**
 * Web Audio API Sound Synthesizer
 * Generates pure synthesizer chimes without needing external sound files.
 */

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    
    // Load preference from localStorage
    const saved = localStorage.getItem('pa_quiz_sound');
    if (saved !== null) {
      this.enabled = saved === 'true';
    }
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('pa_quiz_sound', this.enabled);
    return this.enabled;
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      // Arpeggiated chord (C5 -> E5 -> G5)
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.08); // E5
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.16); // G5

      osc2.frequency.setValueAtTime(1046.50, now + 0.16); // C6

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now + 0.16);
      osc1.stop(now + 0.45);
      osc2.stop(now + 0.45);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  playWrong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      // Low descending buzz (E3 -> C3)
      osc.frequency.setValueAtTime(164.81, now);
      osc.frequency.exponentialRampToValueAtTime(130.81, now + 0.25);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.03);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  playFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const start = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start + idx * 0.12);

        gain.gain.setValueAtTime(0.01, start + idx * 0.12);
        gain.gain.linearRampToValueAtTime(0.15, start + idx * 0.12 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, start + idx * 0.12 + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start + idx * 0.12);
        osc.stop(start + idx * 0.12 + 0.5);
      });
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }
}

window.soundEffects = new SoundEffects();
