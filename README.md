# AVR Maestro

The premium controller for Denon and Marantz AVR receivers.

[![Get it on Google Play](https://img.shields.io/badge/Google%20Play-Download-414141?logo=google-play&logoColor=white&style=for-the-badge)](https://play.google.com/store/apps/details?id=com.miyarahub.avr_maestro)
[![Download on the App Store](https://img.shields.io/badge/App%20Store-Download-0D96F6?logo=app-store&logoColor=white&style=for-the-badge)](https://apps.apple.com/us/app/avr-maestro-for-denon-marantz/id6762881597)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/UmVtxE5fXN)
[![Facebook](https://img.shields.io/badge/Facebook-Community-1877F2?logo=facebook&logoColor=white&style=for-the-badge)](https://www.facebook.com/groups/avrmaestro)
[![Website](https://img.shields.io/badge/miyarahub.com-Visit-FF6E40?style=for-the-badge)](https://miyarahub.com)

> This is the **public bug + feature request repo** for AVR Maestro.
> Found a bug? Want a feature? Open an issue.
> The app source code lives in a separate, private repository.

---

## Why AVR Maestro

AVR Maestro is a network controller for Denon and Marantz home-theater
receivers. It speaks the receivers' native control protocols, exposes
features the official apps either bury or skip, and runs without ads,
without subscriptions, and without sending your data anywhere.

Connect to a receiver on your local network and the app becomes your
remote: power, volume, inputs, surround modes, EQ tuning, speaker
calibration, multi-zone control, an FM/AM tuner, and a live
now-playing display.

---

## Report a bug or request a feature

The fastest way to get our attention:

- **[Report a bug](https://github.com/MiyaraHub/avr-maestro-features-and-bugs/issues/new?template=bug_report.yml)** -
  the app crashed, a button doesn't work, something looks wrong.
- **[Request a feature](https://github.com/MiyaraHub/avr-maestro-features-and-bugs/issues/new?template=feature_request.yml)** -
  something the app should do but doesn't.

Both forms ask the bare minimum so we can act on the report without
chasing details. The more you fill in, the faster we triage.

If your question is more general, drop into [Discord](https://discord.gg/UmVtxE5fXN),
join the [Facebook community](https://www.facebook.com/groups/avrmaestro),
or email [admin@miyarahub.com](mailto:admin@miyarahub.com).

---

## Table of contents

1. [Supported receivers](#supported-receivers)
2. [Before you start](#before-you-start)
3. [Adding your first receiver](#adding-your-first-receiver)
4. [The six tabs](#the-six-tabs)
5. [Dashboard](#dashboard)
6. [Remote](#remote)
7. [Sound](#sound)
8. [Zones](#zones)
9. [Radio](#radio)
10. [Settings](#settings)
11. [Media Player and HEOS](#media-player-and-heos)
12. [Hardware volume keys (Android)](#hardware-volume-keys-android)
13. [Home-screen widgets (Android)](#home-screen-widgets-android)
14. [Backup and restore](#backup-and-restore)
15. [Troubleshooting](#troubleshooting)
16. [Support](#support)

---

## Supported receivers

Networked Denon and Marantz receivers from 2014 onward. The app's own
*Settings -> Devices -> Device Information* screen lists the
recognized families:

- **Denon AVR Series** - X-series networked AV receivers
- **Denon AVC Series** - AVC-A1H, AVC-X8500H and newer
- **Marantz Cinema Series** - Cinema 30, Cinema 40, Cinema 50+
- **Marantz SR Series** - SR5015, SR6015, SR7015 and newer
- **Marantz AV Series** - AV7706, AV8805, AV10 and newer

Older or non-networked receivers are not supported. If your receiver
doesn't show up in the official Denon or HEOS app on the same network,
AVR Maestro won't see it either.

---

## Before you start

- An iOS or Android device on the same Wi-Fi network as the receiver.
- The receiver powered on with **Network Standby** enabled (so the
  app can wake it). On most receivers this is under
  *Setup -> General -> Network -> Network Control -> On*.
- The receiver's **IP address**. You can find it in
  *Setup -> General -> Network -> Information* on the receiver, or in
  your router's connected-devices list.
- Optional: enable **Wake-on-LAN** on the receiver if you want the
  app to power it up from cold standby (off, not Network Standby).
  The first reconnect attempt after the receiver goes fully off
  sends a WoL magic packet to wake it.

---

## Adding your first receiver

The first launch opens the Dashboard with a "No Receivers Found"
message and an **Add Receiver** button. Tap it (or open the same flow
later from *Settings -> Devices -> Add Receiver*).

1. Type your receiver's IP address (e.g. `192.168.1.100`).
2. Tap **Test Connection**. The app probes HTTP, Telnet, and HEOS
   ports and reports which channels are alive.
3. If the test succeeds, you'll see the receiver's model, friendly
   name, and detected capabilities. Confirm to save.
4. The Dashboard now shows the connected receiver.

To switch between saved receivers, use the device card at the top of
the Dashboard or open *Settings -> Devices -> Manage Receivers*
(rename or delete saved receivers there).

---

## The six tabs

The bottom navigation has up to six tabs. Dashboard is locked first;
the rest are reorderable / hideable from
*Settings -> Appearance -> Customize Navigation*.

| Tab | What it's for |
| --- | --- |
| **Dashboard** | At-a-glance status + customizable widget grid |
| **Remote** | Four pages: Main Remote, Inputs, Quick Select, System |
| **Sound** | Surround modes, EQ tuning, channel levels, speaker calibration (model-aware tabs) |
| **Zones** | Independent Zone 2 / Zone 3 control |
| **Radio** | FM/AM tuner: tune, band, presets, save stations (tuner-equipped receivers only) |
| **Settings** | Theme, devices, customization, backup |

You can run as few as 2 tabs or as many as 6. The Radio tab only
appears on receivers that have a built-in tuner; on tuner-less models
it stays hidden (and out of the Customize Navigation list).

---

## Dashboard

The Dashboard is your at-a-glance home base. It always opens with the
**device status card** pinned at the top (model, connection state,
power toggle), and below it a customizable grid of widgets you can
re-order, add, or remove.

Tap the **Customize Dashboard** icon in the app bar (top-left) to
enter edit mode. A toolbar appears with three actions:

- **Add** - opens a sheet listing widgets you don't currently have on
  the grid. The sheet stays open as you add multiple widgets - tap
  Done in the toolbar to close it.
- **Reset** - restores the default widget set and order.
- **Done** - exits edit mode.

In edit mode, drag any card to reorder, or tap the red circle in the
card's corner to remove it. Cards are dimmed while editing so you
can't accidentally change a receiver setting by tapping inside one.

### Available widgets

| Widget | What it does |
| --- | --- |
| Volume | Volume slider with dB readout, mute, and 8 saved presets |
| Source | Tap to open the input picker; long-press tiles to reorder |
| Sound Mode | Current surround mode; tap to open a grouped picker |
| Signal Info | Live audio/video format from the active source |
| Now Playing | Album art + track info + transport (Media Player card) |
| Zones | Compact Z2 / Z3 status + quick controls |
| Quick Select | Denon Quick Select / Marantz Smart Select scene buttons |
| ECO Mode | ECO Mode toggle |
| Sleep Timer | Sleep-timer set / clear |
| Speaker Preset | Speaker preset 1 / 2 switcher (chassis-dependent) |
| Audio Restore | Audio Restorer (PSRSTR) toggle |
| Channel Presets | Saved channel-level presets (per-receiver, up to 20) |
| Speakers Layout | Top-down diagram of active speakers (in vs out) |
| Video Processing | Tap to pick Auto / Movie / Game / Bypass |
| DRC | Tap to pick Dynamic Range Compression: Auto / Off / Low / Mid / High |
| Dirac Live Filter | Quick deep-link to the Dirac Live tab |
| Audyssey State | One-glance MultEQ + DynEQ + DynVol summary |
| Channel Levels | Compact dB-per-channel snapshot |
| Subwoofer Level | Per-source PSSWL playback offset (single or dual sub) with -/+ buttons. Auto-hides when the current source has no audio signal, matching the official app. |
| LFE | LFE level offset (-10 dB to 0 dB) with -/+ buttons and a refresh button. Sticky-disables and shows an "N/A" banner if the receiver silently rejects the write (some chassis don't accept LFE adjust). |
| Room Size | Auromatic 3D room size picker (S / MS / M / ML / L). Only visible on receivers that expose the Auromatic engine (Cinema 30, X4500H+, A10H flagship, etc). |

Widgets only render when the receiver actually exposes the feature
(e.g. Audio Restore is hidden on chassis without PSRSTR, Audyssey
State is hidden on Audyssey-less chassis, etc).

---

## Remote

The Remote tab has **four pages** - swipe or tap the page tabs to
move between them.

### 1. Main Remote

- Command bar (Power / Info / Setup / Option / Back).
- D-pad ring for menu navigation.
- Transport bar (play / pause / stop / prev / next).
- Volume bar with dB readout, mute toggle, hold-to-repeat increment.

### 2. Inputs

A full-screen input picker. Every input the receiver exposes, shown
in your preferred order.

To reorder: open the Source widget on the Dashboard, long-press any
input tile to enter edit mode, then drag tiles to reorder and tap
**Done**. The order is saved per-receiver and applies everywhere
inputs appear in the app.

### 3. Quick Select

Denon Quick Select / Marantz Smart Select buttons (1-4 on most
chassis, 1-5 on flagships like A1H, AV10, A10H).

- **Tap** a slot to recall the receiver's saved scene.
- **Long-press** a slot for a menu: **Rename**, **Save current state**,
  or **Cancel**.
  - **Rename** gives the slot a custom label that persists per-receiver
    and rides along in Backup & Restore. The label shows on both the
    Remote tab and the Dashboard Quick Select widget.
  - **Save current state** opens the **Quick Select Creation** wizard:
    pick exactly which receiver settings this preset captures across
    up to 17 groups (Channel Levels, Subwoofer Level, Sound Mode,
    Dirac Live Slot, Speaker Preset, Input Source, Master Volume,
    Audyssey MultEQ / Dynamic EQ / Dynamic Volume / LFC, Audio
    Restorer, Dialog Enhancer, HDMI Video Output, Playback Content,
    All Zone Stereo, Tone Control). Recall replays *only* the captured
    groups, leaving everything else untouched. Toggles that your
    receiver doesn't expose are hidden.

### 4. System

Direct access to receiver-side system controls, when supported:

- HDMI Output (Auto / TV 1 / TV 2)
- Dimmer (Denon: Toggle / Bright / Dim / Dark / Off) or Illumination
  (Marantz: Auto / Bright / Dim / Dark / Off)
- Triggers (1-3, depending on chassis)
- ECO Mode (Auto / On / Off)
- Auto Standby
- Sleep Timer
- HDMI CEC
- HDMI Audio Decode
- Speaker Preset (Preset 1 / Preset 2 - Cinema 30 and similar)
- Bluetooth Transmitter (Marantz Cinema-class)
- Audio Restorer (PSRSTR)
- Picture Mode
- Video Processing Mode
- All Zone Stereo
- Auto Lip Sync (Marantz only)
- Audio Delay (slider 0-500 ms with fine-grained ±1 ms nudge)
- Input Mode (Auto / HDMI / Digital / Analog)

Anything your receiver doesn't expose is hidden automatically.

---

## Sound

The Sound tab is **model-aware**. Tabs only appear if your receiver
actually supports the feature - so the layout will look different on
a Cinema 30 versus an AVR-X1700H. Some tabs (like Shape) also gate
on the *current* surround mode and slide in or out as you change
modes.

### Always available

- **Surround** - the surround mode picker plus an **Audio Features**
  panel and a per-source **Subwoofer Level Adjust** card (PSSWL).
  Single-sub chassis show one card ("Subwoofer Level"); dual-sub
  chassis show two ("Sub 1 Level" + "Sub 2 Level"). The card
  auto-hides when the current source isn't passing audio, matching
  the official Denon / Marantz app behaviour.
  - Modes are grouped (Movie / Music / Game / Pure) using the
    receiver's own selectable list. Tap a mode to switch.
  - Audio Features pills (Cinema EQ, Loudness Management, Center
    Spread, Speaker Virtualizer, Neural:X, IMAX, Tone Control where
    applicable) use a three-state UI:
    - **Active** (lit) - feature is on, tap to turn it off.
    - **Inactive** (subtle) - feature is off, tap to turn it on.
    - **N/A** (greyed, with a help icon) - the current sound mode
      or audio format doesn't support this feature. Tap the (?)
      for a one-line explanation.
- **Dialog & DRC** - center-level adjust + Dynamic Range Compression
  (Auto / Off / Low / Mid / High). DRC greys out when the input is
  not Dolby (PCM, DTS, analog), since the receiver silently rejects
  the command in those modes.
- **Channels** - per-channel trim (Front L/R, Center, Surrounds,
  Heights, Subs) plus Bass Sync subwoofer alignment. Save and recall
  up to **20 presets per receiver** (e.g. "Movies", "Music",
  "Late night"). Presets are portable across chassis with different
  wire forms (e.g. a Cinema 30 preset restores correctly on an A10H
  and vice versa) and capture both channel trims and the per-source
  Subwoofer Level Adjust offset.
- **Tone** - Bass, Treble, DAC Filter (when supported). Tone Control
  is locked off automatically when Dynamic EQ is on - that's how
  Audyssey works on the receiver.

### Conditional (shown when supported)

- **Audyssey** - MultEQ (Reference / Bypass L/R / Flat / Off),
  Dynamic EQ on/off, Dynamic Volume (Off / Light / Medium / Heavy),
  Reference Level Offset, and Audyssey LFC with a Containment Amount
  up/down stepper.
- **Dirac Live** - Filter slot selection, with named slots pulled
  from your Dirac Live software. The user-given filter name is the
  primary label; "SLOT N" sits underneath as a small hint. Empty
  slots are hidden so you can't accidentally pick one that does
  nothing. The picker shows the active slot live, so changes made
  via the physical remote, front panel, or Dirac Live software are
  reflected immediately.
- **Per speaker preset.** Audyssey and Dirac Live are both detected
  per speaker preset (SPP1 vs SPP2). If you have Audyssey on SPP1
  and Dirac on SPP2, switching speaker presets will swap which
  calibration controls show on the dashboard and Sound tab. The
  refresh button on the calibration card forces a re-detection if
  you ever need to push the receiver again.
- **Audyssey / Dirac Live are mutually exclusive on the receiver.**
  When one is active on the current speaker preset, the other reads
  "N/A while X is active" and dims out across the dashboard widget,
  the Sound tab, and any other surface it appears on. Switch to a
  speaker preset that has the other system loaded, or toggle the
  active system off to re-enable.
- **Distances** - per-speaker distance from your listening position,
  read from and written back to the receiver. Each active speaker
  gets a stepper in the receiver's own units (meters or feet,
  whichever the receiver is set to display). Locks automatically when
  a Dirac Live filter is active on the current speaker preset (Dirac
  owns the distances in that case) - switch to a non-Dirac speaker
  preset to edit them. Shown only on receivers that expose distance
  over their config API.
- **Crossovers** - per-speaker crossover frequency (the point below
  which bass is redirected to the subwoofer). Pick from the
  receiver's allowed steps (40 Hz through 250 Hz, plus THRU for
  full-range). Only speakers set to "small" appear; speakers set to
  "large" run full-range and have no crossover, so they're omitted.
  Like Distances, this reads live from the receiver and is shown only
  where the chassis exposes it.
- **Tactile Transducer** - on chassis that expose it (Cinema 30,
  X4500H+, A10H flagship): enable / disable, level adjust, and a
  low-pass-filter selector.
- **Shape** (Surround Shape) - Dolby Surround / Neural:X upmixer
  parameters: **Panorama** (on/off), **Dimension** (up/down step),
  **Center Width** (up/down step), and **Room Size**
  (S / MS / M / ML / L). Only appears when the current surround
  mode is one where these parameters apply (Dolby Surround variants
  and DTS Neural:X).
- **IMAX** - IMAX Enhanced toggle plus HPF / LPF crossover lists
  pulled live from the receiver, Subwoofer ON/OFF, Subwoofer Output
  (LFE / LFE+Main).
- **Auro-3D** (Auromatic) - Auromatic Preset (Small / Medium /
  Large) and 3D strength.

---

## Zones

If your receiver has Zone 2 or Zone 3, the Zones tab gives each zone
its **own** power, volume, mute, input, and quick-volume presets,
fully independent of the main zone.

Zone state syncs live: switch a zone from the receiver's front panel
or the physical remote, and the app updates within a second. Zones
the receiver doesn't expose are hidden automatically.

When a zone is powered on, its card also shows the live HEOS
now-playing stream for that zone with inline transport controls
(play / pause / next / previous). Single-pid receivers (Cinema 30,
mid-range Denon) route every zone to the chassis stream, so all
zones display the same now-playing block - that matches what the
receiver is actually doing internally. Multi-pid flagships that
expose Zone 2 / Zone 3 as separate HEOS players show distinct
streams per zone.

Per-zone Quick Volume presets are stored separately by (receiver +
zone), so each zone can have its own preset set.

---

## Radio

If your receiver has a built-in FM/AM tuner, the **Radio** tab is a
full tuner front-end. It's capability-gated: on receivers without a
tuner the tab never appears (and stays out of Customize Navigation).

The big station card up top shows the live band, frequency, and
active preset, and follows the receiver in real time - tune from the
front panel or the original remote and the app keeps up.

- **Band** - FM / AM toggle.
- **Tune mode** - Auto / Manual. Auto scans to the next strong
  station; Manual steps by the band increment.
- **Tune** - the two large Tune buttons step the dial; **Enter
  frequency** opens a keypad to jump straight to a station (e.g.
  `97.9` FM or `1440` AM). Direct entry needs Manual mode, since in
  Auto the receiver only stops on stations it can lock.
- **Presets** - a grid of preset slots plus up / down steppers to
  walk through your stored stations. The active preset is highlighted
  and shown on the station card.

### Saving and naming presets

**Long-press** any preset slot for its menu:

- **Save current station here** - stores whatever you're tuned to
  into that slot on the receiver. (Disabled with a "Tune to a station
  first" hint until the receiver has reported a frequency, so you
  can't overwrite a slot with nothing.)
- **Add label / Rename label** - give the slot a friendly name
  ("Jazz 88", "NPR", "Classic FM"). Labels are stored in the app
  per-receiver and show under the slot number - they're yours to
  make as readable as you like, separate from the receiver's own
  preset memory, and they ride along in Backup & Restore.
- **Clear label** - removes a label (the saved station stays).

---

## Settings

Sections (from top to bottom):

### Devices

- The active device card - tap to switch between saved receivers.
- **Device Information** - full capability snapshot, ports, hardware
  details.
- **Manage Receivers** - rename or delete saved receivers. The
  currently active receiver is marked with an "Active" badge.
- **Add Receiver** - opens the Add Receiver flow.

### Appearance

- **Theme** - four options:
  - **Light** - clean white theme.
  - **Dark** - true AMOLED black with the brand orange-red accent.
  - **Device Theme** - follows your phone's system brightness
    (light/dark) using the brand color.
  - **TJ Mode** - pick any color you like and the app rebuilds its
    entire palette from that seed. The picked color is the primary
    accent; complementary surface tones are derived automatically
    so contrast and readability stay correct.
- **Display Size** - global UI scale (Small / Default / XL).
- **Widget Size** - Small / Medium / Large preset for card density.
- **Customize Navigation** - reorder, hide, or restore the
  bottom-nav tabs (Dashboard always pinned first).
- **Customize Tabs** - hide sub-views inside Sound and Remote that
  you don't use (e.g. turn off Auro-3D if you never touch it).

### Audio

- **Volume Step** - 0.5 / 1.0 / 1.5 / 2.0 dB per press. Applies to
  taps, drags, and hardware-key actions.
- **Show absolute volume on top** - flips the volume readout so the
  absolute value (e.g. `52`) is the headline and dB is the subscript,
  instead of the default (dB on top).

### Help

- **Show explanation cards** - master toggle for the inline
  "how this works" cards spread across the app.
- **Restore dismissed cards** - re-shows any cards you've previously
  swiped away.
- **Debug Log** - live in-app log viewer. The toolbar has Copy, Save,
  Share, and Clear shortcuts; the header also has a prominent
  **Save & share** button that writes the log to a temp file and
  hands it straight to the system share sheet, so dropping a log
  into a support ticket is one tap.

### Developer Tools (advanced)

Hidden by default; long-press the version number in the About screen
to unlock. Once enabled, a **Developer Tools** entry appears in
Settings. Tools available:

- **Telnet Command** - send raw Denon / Marantz telnet commands and
  view the response.
- **HEOS Command** - send raw HEOS API commands.
- **AJAX Dump** - inspect the receiver's AppCommand0300 + ajax
  endpoints. Each capture has a canonical Download / Share / Email
  action.
- **Volume Cap Wire Diagnostic** - one-button probe that asks the
  receiver which wire channel carries the user-set volume cap
  (different chassis generations use different commands - Cinema 30
  uses `SSVCTZMALIM`, some older Denon models may use
  `SSCUST_MAX_VOL` per third-party documentation). Renders the raw
  response as readable text + JSON with Share buttons - if your
  receiver hits a volume-cap quirk we haven't seen, one tap captures
  the wire shape and you can drop the JSON into the Discord or
  Facebook community for us to add native support.

### Backup

- **Backup & Restore** - export every saved receiver, preset, and
  preference to a JSON file (save to device or share); import to
  restore.

### App

- **About AVR Maestro** - version info, website, **Discord Community**,
  **Facebook Support Group** (facebook.com/groups/avrmaestro),
  privacy policy, terms of service, share-app, open-source licenses.

---

## Media Player and HEOS

When the receiver is playing audio over an input that exposes
metadata (HEOS streaming services and network media reliably; other
sources only when the receiver itself reports the metadata), the
Dashboard's **Now Playing** card shows album art, track / artist /
station info, and transport controls (play / pause / next / previous).

To **browse music** - pick stations, queue tracks, choose streaming
services, manage HEOS rooms - tap the **Launch HEOS** button on the
Now Playing card. AVR Maestro launches the official HEOS app for
browse and group management; once playback starts there, AVR Maestro
takes over the now-playing display, transport, and home-screen
widget updates.

This is intentional. AVR Maestro's job is fast, accurate now-playing
+ transport + widget integration; HEOS browse already does music
discovery well, and we don't try to duplicate it.

If the Now Playing card stays empty, the current input doesn't
expose metadata. Analog inputs, optical / coaxial digital, and HDMI
passthrough all report "no metadata" by design.

---

## Hardware volume keys (Android)

When AVR Maestro is the foreground app on Android, your phone's
physical volume keys control the **receiver's** volume instead of
the phone's, no matter which tab you're on. Volume Up, Volume Down,
and Volume Mute all route to the receiver. Each press uses the
volume-step preference from *Settings -> Audio -> Volume Step*.

This is foreground-only. The keys go back to controlling the phone
the moment the app is backgrounded; on resume they take over again
immediately.

iOS does not allow third-party apps to intercept hardware volume
keys, so this feature is Android-only.

---

## Home-screen widgets (Android)

Three widgets are available from the Android home-screen widget
picker:

- **Quick Control** - power, volume up / down, mute, source cycle.
- **Now Playing** - track + art + transport.
- **Status** - current input, volume, surround mode at a glance.

All widgets are tap-only and resizable on the home screen. They
refresh whenever the app receives a state update from the receiver.
Long-press a widget on the home screen to remove or resize it.

iOS does not have AVR Maestro widgets.

---

## Backup and restore

*Settings -> Backup -> Backup & Restore* gives you:

- **Export** - produces a JSON file with every saved receiver, every
  preset (channel levels, quick volume), every preference, and every
  customization (dashboard widget order, bottom-nav order, theme,
  display size). You can save to your device or share via the system
  share sheet.
- **Import** - load a previous export. The app will ask before
  replacing your current settings.

The export contains no credentials, no API keys, and no personal
data beyond the receiver IPs and your own preset names. It's safe to
share with someone setting up the same receivers.

---

## Troubleshooting

### "Test Connection" fails

- Check phone and receiver are on the same Wi-Fi network and same
  subnet. Some routers (mesh systems, guest networks, IoT VLANs)
  isolate devices.
- On the receiver: *Setup -> Network -> Network Control* must be
  **On**.
- Confirm the IP address against the receiver's own
  *Setup -> Network -> Information* screen. DHCP-issued IPs can
  change.
- The test result tells you which protocols connected. HTTP is
  required; Telnet and HEOS are nice-to-have.

### Connection drops every few seconds

- Receiver Telnet ports get sticky after long uptimes. Power-cycle
  the receiver from the wall to clear the listener.
- On Wi-Fi 6 mesh, force the phone to the same band as the receiver.
  AVRs typically connect on 2.4 GHz; phones often prefer 5 GHz.

### Volume readout looks wrong

- Some receivers report volume in absolute (0-98), some in relative
  (-80 to +18 dB). The app handles both. If you've recently changed
  the receiver's *Setup -> Audio -> Volume -> Display* setting,
  restart the app so it re-reads the scale.
- You can flip which value is on top via
  *Settings -> Audio -> Show absolute volume on top*.

### Sound modes are greyed out

- Most surround modes are gated by the **input source's audio
  format**. A 2-channel stereo input won't enable Dolby Atmos or
  Auro-3D. This is the receiver's behaviour, not the app's.

### A feature pill says "N/A"

- Surround features are conditionally available based on the current
  sound mode plus the audio format. Tap the (?) icon next to the
  N/A pill for the exact requirement (e.g. "Center Spread is only
  available with Dolby Surround upmixer modes").

### Now Playing card is blank

- The current input doesn't expose metadata. Analog, optical /
  coaxial digital, and most HDMI passthrough sources don't report
  enough info for the receiver to surface track data.
- For HEOS sources: tap **Launch HEOS** to start playback there,
  then return - the metadata will populate.

### Some Sound tabs are missing

- Sound tabs are model-aware and mode-aware. Audyssey, Dirac Live,
  IMAX, Auro-3D, Surround Shape, Distances, and Crossovers only
  appear on receivers that expose them. Shape additionally requires
  the upmixer to be engaged. If you expect a tab and it's missing,
  check *Settings -> Devices -> Device Information* to see what the
  app detected on your chassis.

### The Radio tab isn't showing

- Radio is capability-gated: it only appears on receivers that
  report a built-in FM/AM tuner. If your receiver has a tuner but the
  tab is hidden, confirm the tuner shows as an input on the receiver
  itself, then reconnect in the app so it re-reads the capability
  list. If you've hidden it, re-add it from
  *Settings -> Appearance -> Customize Navigation*.

### App crashes on startup

- [Open a bug report](https://github.com/MiyaraHub/avr-maestro-features-and-bugs/issues/new?template=bug_report.yml).
  Crash reports are auto-collected so the bug is probably already on
  our radar, but a one-line note from you confirms it.

---

## Support

- **Bugs:** [Report a bug](https://github.com/MiyaraHub/avr-maestro-features-and-bugs/issues/new?template=bug_report.yml)
- **Feature requests:** [Request a feature](https://github.com/MiyaraHub/avr-maestro-features-and-bugs/issues/new?template=feature_request.yml)
- **Discord:** [discord.gg/UmVtxE5fXN](https://discord.gg/UmVtxE5fXN)
- **Facebook community:** [facebook.com/groups/avrmaestro](https://www.facebook.com/groups/avrmaestro)
- **Email:** [admin@miyarahub.com](mailto:admin@miyarahub.com)
- **Website:** [miyarahub.com](https://miyarahub.com)

If the app made your home theatre easier to live with, leave a
review on the Play Store or App Store - it genuinely helps the
project keep shipping updates.

---

<sub>© MiyaraHub Technologies LLC. All rights reserved. AVR Maestro is
not affiliated with, endorsed by, or sponsored by Denon, Marantz,
Sound United, or Masimo Consumer.</sub>
