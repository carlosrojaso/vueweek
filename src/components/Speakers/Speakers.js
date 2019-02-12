export default {
  name: 'Speakers',
  data: () => ({
    speakers: [],
    speakerRows: []
  }),
  mounted() {
    this.loadSpeakers();
  },
  methods: {
    async loadSpeakers() {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        this.speakers = data.speakers;
        this.speakerRows = this.speakers.reduce(
          (acc, element) => {
            if (acc[acc.length - 1].length < 4) {
              acc[acc.length - 1].push(element);
            } else {
              acc[acc.length] = [element];
            }
            return acc;
          },
          [[]]
        );
      } catch (error) {
        // Nothing to do
      }
    }
  }
};
