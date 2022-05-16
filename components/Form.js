/*html*/

const Form = {
  props: {
    
  },
  setup() {
    const categories = Vue.ref([
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]);
    const event = Vue.ref({
      category: '',
      title: '',
      description: '',
      location: '',
      pets: 1,
      extras: {
        catering: false,
        music: false
      }
    });
    
    return { categories, event };
  },
  template: /*html*/`
  <div>
    <h1>Create an event</h1>
    <pre>{{ event }}</pre>
    <form>
      <label>Select a category</label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >{{ option }}</option>
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input
        v-model="event.title"
        type="text"
        placeholder="Title"
        class="field"
      >

      <label>Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Description"
        class="field"
      />
      <div v-if="event.category === 'sustainability'">
        <h3>Where is your event?</h3>

        <label>Location</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Location"
          class="field"
        />
      </div>

      <h3>Are pets allowed?</h3>
      <div>
        <input
            type="radio"
            v-model="event.pets"
            :value="1"
            name="pets"
          />
        <label>Yes</label>
      </div>

      <div>
        <input
          type="radio"
          v-model="event.pets"
          :value="0"
          name="pets"
        />
        <label>No</label>
      </div>

      <h3>Extras</h3>
      <div>
        <input
          type="checkbox"
          v-model="event.extras.catering"
          class="field"
        />
        <label>Catering</label>
      </div>

      <div>
        <input
          type="checkbox"
          v-model="event.extras.music"
          class="field"
        />
        <label>Live music</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
  `
}