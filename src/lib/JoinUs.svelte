<script>
	import Heading from '$lib/Heading.svelte';
	export let id = 'join';

	let googleGroupEmail = 'lahs-mbcg-parents-group+subscribe@googlegroups.com';
</script>

<div {id} class="flex flex-col justify-center items-center py-16">
	<div class="font-header text-4xl text-center mb-4 underline underline-offset-2">
		How do I join?
	</div>
	<div class="w-full max-w-4xl flex flex-col justify-center items-center px-10 text-xl text-center">
		<div class="">It’s easy! Attend Band Camp over the summer (dates TBD) or come to one of our pre-season workshops to learn the basics! Workshops will be held on </div>
		<div class="flex font-bold mb-2">
			<div class="me-2">April 16, April 23, April 30, and May 7</div>
			<div class="text-blue-500">
				<a
					href="https://calendar.google.com/calendar/u/0/r/eventedit?text=LAHS+Marching+Band+Workshop&dates=20250416T223000Z/20250417T003000Z&details&location=Room+803&ctz=America/Los_Angeles&recur=RRULE:FREQ%3DWEEKLY;UNTIL%3D20250507&sf=true"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
						/>
					</svg>
				</a>
			</div>
		</div>
		<div>from 3:30 to 5:30 pm in the band room (803). Come visit to see if marching band is right for you!</div>

		<div class="my-4 flex items-center">
			<p>
				For more updates, <a
					href="https://docs.google.com/forms/d/e/1FAIpQLSdZBQR55lVr0-gf81fvLGNkAxfP7ftQ6cFh5LSI4qyr-VcwsA/viewform"
					target="_blank"
					class="link">join our mailing list!</a
				>
			</p>
			<a href="mailto:{googleGroupEmail}" class="ms-2 text-blue-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>
