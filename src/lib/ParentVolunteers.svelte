<script>
	import { base } from '$app/paths';
	export let id = 'parents';
</script>

<div {id} class="my-24 py-3 px-5 md:px-10 flex flex-col items-center md:flex-row justify-center">
	<div
		class="grid grid-rows-[1rem_1rem_min-content] md:grid-rows-[5rem_4rem_max-content] grid-cols-[1rem_1 rem_max-content] md:grid-cols-[3rem_7rem_max-content]"
	>
		<img
			src="{base}/images/vol1.jpg"
			alt="Volunteers serving food at a competition."
			class="w-64 h-44 object-cover col-start-1 row-start-1 col-span-3 z-10 hover:z-40 hover:drop-shadow-md"
		/>
		<img
			src="{base}/images/vol2.jpg"
			alt="Lunch display at comps!"
			class="w-64 h-44 object-cover col-start-3 row-start-2 col-span-3 z-30 hover:z-40 hover:drop-shadow-md"
		/>
		<img
			src="{base}/images/vol3.jpg"
			alt="Volunteers pulling instruments onto field."
			class="w-64 h-44 object-cover col-start-2 row-start-3 col-span-3 z-20 hover:z-40 hover:drop-shadow-md"
		/>
	</div>
	<div class="flex justify-center items-center md:ms-10 lg:ms-20 text-center md:text-left">
		<div>
			<div class="font-header text-4xl italic pb-5 pt-5 md:pt-0">
				The success of marching band is made possible by our amazing parent volunteers.
			</div>
			<div class="text-lg">
				For more info on the LAHS Instrumental Music Boosters, click <a
					href="https://lahs.mvla.net/ParentsStudents/Parent-Booster-Organizations/Music-Boosters/index.html"
					class="text-blue-500 underline">here</a
				>.
				<br />
				Or contact Chris Hondl at
				<a href="mailto:chondl@gmail.com" class="text-blue-500 underline">chondl@gmail.com</a>
			</div>
		</div>
	</div>
</div>
