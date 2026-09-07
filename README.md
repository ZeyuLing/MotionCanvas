<p align="center">
  <a href="https://zeyuling.github.io/MotionCanvas/#demo"><img src="assets/readme/cover.png" width="100%" alt="MotionCanvas — Your cues. One coherent motion. Watch the complete demonstration." /></a>
</p>

<h3 align="center">Mask-Consistent Flow Matching for Composable Kinematic Control<br />in Human Motion Generation</h3>

<p align="center">
  <b><a href="https://zeyuling.github.io/MotionCanvas/">Project page</a></b> &nbsp; / &nbsp;
  <b><a href="https://zeyuling.github.io/MotionCanvas/#demo">Full video</a></b> &nbsp; / &nbsp;
  <b><a href="#benchmark-gallery">Benchmark gallery</a></b> &nbsp; / &nbsp;
  <b><a href="#resources">Paper &amp; code</a></b> &nbsp; / &nbsp;
  <b><a href="#hugging-face">Hugging Face</a></b>
</p>

---

**Give the motion a pose, a path, a local target, or an edit.** MotionCanvas organizes a
coherent full-body action around these cues. A shared motion canvas and mask-consistent
flow matching bring heterogeneous control requests into one generative model.

## Watch MotionCanvas

The complete **2:38 narrated film** combines kinematic control, motion editing, and character
animation. Explore individual scenes below, or watch it end to end.

<p><b><a href="https://zeyuling.github.io/MotionCanvas/#demo">▶ Full film with chapters</a></b> &nbsp; · &nbsp; <a href="https://zeyuling.github.io/MotionCanvas/assets/media/motioncanvas-v52-1080p.mp4">1080p MP4</a> &nbsp; · &nbsp; <a href="https://github.com/ZeyuLing/MotionCanvas/releases/download/demo-v52/motioncanvas-demo-1440p.mp4">1440p original</a></p>

<table>
  <tr>
    <td width="33%" align="center"><a href="https://zeyuling.github.io/MotionCanvas/assets/showcase/route.mp4"><img src="assets/readme/route.webp" alt="Routes &amp; local targets" width="100%" /></a><br /><b>Routes &amp; local targets</b></td>
    <td width="33%" align="center"><a href="https://zeyuling.github.io/MotionCanvas/assets/showcase/footsteps.mp4"><img src="assets/readme/footsteps.webp" alt="Footsteps &amp; heading" width="100%" /></a><br /><b>Footsteps &amp; heading</b></td>
    <td width="33%" align="center"><a href="https://zeyuling.github.io/MotionCanvas/assets/showcase/jump.mp4"><img src="assets/readme/jump.webp" alt="Key poses &amp; trajectories" width="100%" /></a><br /><b>Key poses &amp; trajectories</b></td>
  </tr>
  <tr>
    <td width="33%" align="center"><a href="https://zeyuling.github.io/MotionCanvas/assets/showcase/editing.mp4"><img src="assets/readme/editing.webp" alt="Language-guided editing" width="100%" /></a><br /><b>Language-guided editing</b></td>
    <td width="33%" align="center"><a href="https://zeyuling.github.io/MotionCanvas/assets/showcase/boxing.mp4"><img src="assets/readme/boxing.webp" alt="Composed hand controls" width="100%" /></a><br /><b>Composed hand controls</b></td>
    <td width="33%" align="center"><a href="https://zeyuling.github.io/MotionCanvas/assets/showcase/basketball.mp4"><img src="assets/readme/basketball.webp" alt="Timed spatial targets" width="100%" /></a><br /><b>Timed spatial targets</b></td>
  </tr>
</table>

## Benchmark gallery

**12 MotionCanvas inference cases**, selected from Motius across seven task categories.
The gallery covers temporal completion, body-part control, sequential generation, instruction
editing, style editing, content editing, and text-to-motion.

Each preview links to its full clip and source viewer. For edits, **input motion is on the left**
and **MotionCanvas is on the right**. In temporal previews, amber marks supplied poses; blue
marks generated frames. The local-control marker identifies the controlled wrist.

<table>
  <tr>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-prediction"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/prediction.webp" /><img src="assets/benchmarks/prediction.gif" loading="lazy" width="100%" alt="Motion prediction: First pose + text" /></picture></a>
      <b>Motion prediction</b><br />
      First pose + text
    </td>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-body-part-reach"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/body-part-reach.webp?case=003245" /><img src="assets/benchmarks/body-part-reach.gif?case=003245" loading="lazy" width="100%" alt="Coordinated arm raise: Sparse wrist positions + text" /></picture></a>
      <b>Coordinated arm raise</b><br />
      Sparse wrist positions + text
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-sequential"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/sequential.webp?case=val_6604" /><img src="assets/benchmarks/sequential.gif?case=val_6604" loading="lazy" width="100%" alt="Sequential generation: Stand → walk left → stop" /></picture></a>
      <b>Sequential generation</b><br />
      Stand → walk left → stop
    </td>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-instruction"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/instruction.webp" /><img src="assets/benchmarks/instruction.gif" loading="lazy" width="100%" alt="Instruction editing: “Make a wider turn”" /></picture></a>
      <b>Instruction editing</b><br />
      “Make a wider turn”
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-style"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/style.webp" /><img src="assets/benchmarks/style.gif" loading="lazy" width="100%" alt="Style editing: Keep hopping · add an angry style" /></picture></a>
      <b>Style editing</b><br />
      Keep hopping · add an angry style
    </td>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-content"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/content.webp" /><img src="assets/benchmarks/content.gif" loading="lazy" width="100%" alt="Content editing: Hop → walk · retain the style" /></picture></a>
      <b>Content editing</b><br />
      Hop → walk · retain the style
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-keyframes"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/keyframes.webp" /><img src="assets/benchmarks/keyframes.gif" loading="lazy" width="100%" alt="Sparse keyframes: Scattered pose cues + text" /></picture></a>
      <b>Sparse keyframes</b><br />
      Scattered pose cues + text
    </td>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-in-betweening"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/in-betweening.webp" /><img src="assets/benchmarks/in-betweening.gif" loading="lazy" width="100%" alt="Motion in-betweening: Endpoint poses + text" /></picture></a>
      <b>Motion in-betweening</b><br />
      Endpoint poses + text
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-no-text"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/no-text.webp" /><img src="assets/benchmarks/no-text.gif" loading="lazy" width="100%" alt="Motion-only continuation: First 20% of frames · no text" /></picture></a>
      <b>Motion-only continuation</b><br />
      First 20% of frames · no text
    </td>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-text-to-motion"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/text-to-motion.webp" /><img src="assets/benchmarks/text-to-motion.gif" loading="lazy" width="100%" alt="Text-to-motion: Language alone · no kinematic cues" /></picture></a>
      <b>Text-to-motion</b><br />
      Language alone · no kinematic cues
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-body-part"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/body-part.webp" /><img src="assets/benchmarks/body-part.gif" loading="lazy" width="100%" alt="Local wrist control: Sparse wrist positions + text" /></picture></a>
      <b>Local wrist control</b><br />
      Sparse wrist positions + text
    </td>
    <td width="50%" valign="top">
      <a href="https://zeyuling.github.io/MotionCanvas/#case-sequential-lift"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/benchmarks/sequential-lift.webp" /><img src="assets/benchmarks/sequential-lift.gif" loading="lazy" width="100%" alt="Sequential generation: Walk → lift → walk back" /></picture></a>
      <b>Sequential generation</b><br />
      Walk → lift → walk back
    </td>
  </tr>
</table>

<p align="center"><b><a href="https://zeyuling.github.io/MotionCanvas/#benchmarks">Browse all cases with task filters →</a></b></p>

## One canvas, coherent completion

<img src="assets/figures/motioncanvas-pipeline.png" alt="MotionCanvas pipeline: compose kinematic assignments on the canvas, predict motion with a shared MMDiT, sample through projected flow updates, and train coherent completion with geometric and transition objectives." width="100%" />

- **Compose the cues.** Key poses, trajectories, local position and rotation targets share a
  time–kinematic-variable canvas.
- **Plan the motion.** Mask-consistent flow matching organizes the unspecified motion around
  the supplied assignments.
- **Edit in context.** Language and input motion support changes to an existing action.

## Resources

| Resource | Status |
| :--- | :--- |
| Project page & video | [Explore MotionCanvas](https://zeyuling.github.io/MotionCanvas/) |
| Paper & citation | Coming soon |
| Training & inference code | Coming soon |
| Hugging Face model | Coming soon |
| Benchmark viewers | Available below |

### Hugging Face

[Temporal control](https://huggingface.co/spaces/ZeyuLing/temporal-condition-leaderboard) ·
[Body-part control](https://huggingface.co/spaces/ZeyuLing/body-part-condition-humanml3d-leaderboard) ·
[Sequential generation](https://huggingface.co/spaces/ZeyuLing/babel-sequential-generation-leaderboard) ·
[Instruction editing](https://huggingface.co/spaces/ZeyuLing/instruction-editing-leaderboard) ·
[Style & content editing](https://huggingface.co/spaces/ZeyuLing/motion-edit-leaderboard) ·
[Text-to-motion](https://huggingface.co/spaces/ZeyuLing/t2m-humanml3d-leaderboard)

Follow this repository for the paper, model, and dedicated code release.

---

<sub>[Media provenance](assets/media-manifest.json) · [Media notes](MEDIA.md) · [Motius](https://github.com/ZeyuLing/Motius)</sub>
