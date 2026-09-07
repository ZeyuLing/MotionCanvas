# Media notes

The narrated film and six character clips are presentation excerpts from the
approved MotionCanvas demonstration. The website does not present these edited
presentation clips as raw benchmark measurements.

The benchmark gallery contains twelve persisted MotionCanvas inference cases from
Motius: temporal prediction, in-betweening, sparse keyframes, continuation without
text, two local wrist-control cases, two BABEL sequences, instruction editing,
style editing, content editing, and text-to-motion. The gallery does not include
corruption or repair previews.

The featured local-control and sequential previews are HumanML3D case `001014`
and BABEL case `val_6604`. Their complete frame sequences were inspected for
motion continuity and input correspondence before selection; these are curated
examples, not a substitute for the aggregate benchmark results.

The local-control selection also underwent wrist-position and rotation continuity
screening and enlarged consecutive-frame inspection. Its original benchmark
motion was retained without smoothing or joint corrections.

The previews use each benchmark viewer's SMPL decoder and original motion frames.
No motion post-processing is applied. Camera, materials, and framing are standardized;
editing comparisons use input and output side by side. Mesh frustum culling is
disabled when capturing the editing viewers so moving figures remain visible.
Original playback rates are retained (20 fps for the local-control cases and
30 fps for the other selected cases). GIFs are short 12 fps previews; the MP4s
contain the complete selected cases at their source playback rate.

Case identifiers, input conditions, source viewers, and MP4 hashes are recorded in
[the media manifest](assets/media-manifest.json). For the editing viewers, select
the case index and track recorded there; these viewers do not expose case-specific
deep links. The character film and benchmark outputs are distinct media collections.

The README cover and six character stills use approved V52 frames without narration
subtitles. Only the cover's typography and layout are new.

The method figure is the paper figure used in the current demonstration.

Character designs, body models, and other third-party assets retain their
respective rights and licenses. Rendered previews do not grant permission to
redistribute the underlying character meshes, textures, or body-model files;
those source assets are not included in this repository.

The 1080p web film and short MP4s are served by the project page. The full 1440p
master is distributed separately as a GitHub Release asset to keep large
production masters out of Git history. Neither model weights nor training
data are included in this website repository.
