<template lang="pug">
.color-fg-white.color-bg-black
  PageHeader(imagePath="nullcat/nyan_nullcat.png")
  MarkdownContent(repoUrl="NullCatSlave/nullc.at", filePath="nullcat.md")
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class AboutPage extends Vue
{
	private readonly header: Header = {
		title: "About",
	}

	mounted()
	{
		this.$nuxt.$emit("update-header", this.header)
	}

	head()
	{
		return {
			title: this.header.title,
		}
	}
}
</script>
