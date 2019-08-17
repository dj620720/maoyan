<template>
	<div id="main">
		<Header title="我的" />
		<login/>
		<TabBar />
	</div>
</template>
<script>
	import Header from "@/components/Header"
	import TabBar from "@/components/TabBar"
	import login from "@/components/login"
	export default {
		name: "mine",
		components: {
			Header,
			TabBar,
			login
		}
	}
</script>
<style scoped>

</style>
