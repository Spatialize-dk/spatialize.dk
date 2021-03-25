<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="info">
        <b-navbar-brand href="#">Spatialize</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-scroll-to="'#vision'">
              Vision
            </b-nav-item>
            <b-nav-item v-scroll-to="'#vi-tilbyder'">
              Vi tilbyder
            </b-nav-item>
            <b-nav-item v-scroll-to="'#team'">
              Team
            </b-nav-item>
            <b-nav-form>
              <b-button size="sm" v-scroll-to="'#contact'"
                        class="my-2 my-lg-0 btn btn-dark"
                        type="submit">Kontakt
              </b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <section>
      <b-container>
        <b-row class="pt-0">
          <b-col cols="12" sm="6" offset-sm="3">
            <h5 class="mt-0">Spatialization</h5>
            <i class="spatialization">
            …is the spatial forms that social activities and material things,
            phenomena or processes take on in geography, sociology,
            urban planning and cultural studies. Generally the term
            refers to an overall sense of social space typical of a time,
            place or culture.
            </i>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section id="vision">
      <b-container>
        <b-row>
          <b-col cols="8" offset="2">
            <h2> Vision </h2>
            <p>
              Fremtidens bæredygtige udvikling bygger på inklusion. Deltagelse skaber muligheder for implementering af
              bæredygtige løsninger. Borgerne skal med på banen fra design til implementering og forvaltning.

              <h5>Dialog gennem kortlægning</h5>

              For at hjælpe din process til at blive demokratisk og få forandring til at ske på et oplyst grundlag
              hjælper
              vi med organiseringen af brugergenereret data.
              Vi hjælper med at sætte fokus på problemer på de steder hvor de optræder i landskabet.
              Spatialize bearbejder dine data og omsætter dem til forståelige kort, som danner grundlag for din
              inddragende process.

              <h5>Mennesket i Smart City</h5>

              Smart City handler p.t. om opsamling og brug af kvantitative data såsom luftkvalitet, trafiktal,
              affaldshåndtering, belysning, parkering mm. Der mangler fokus på livskvalitet, tryghed og hvad vi synes om
              vores fysiske omgivelser - det vil vi lave om på.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section id="vi-tilbyder">
      <b-container>

        <b-row>
          <b-col cols="10" offset="2">
            <h2 ref="vi-tilbyder"> Vi tilbyder </h2>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="2" offset="2">
            <img svg-inline svg-sprite fluid left class="img-fluid"
                 alt="Kortbaserede borgerinddragelsesprocesser"
                 src="./assets/svgs/mapbased-inclusion.svg"/>

          </b-col>
          <b-col cols="6">
            <h3> Kortbaserede borgerinddragelsesprocesser</h3>
            <p>
              Vi hjælper dig med at strukturere din proces, fra start til slut, eller i specifikke nedslag.
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6" offset="2">
            <h3>Data, visualisering og kartografi</h3>
            <p>
              Vi er gode til at finde historier i data, sammenkøre dem med jeres egne og åbne data
              og visualiserer dem i letforståelig kartografi og infographics, både som billeder
              og interaktive kort til indlejring i hjemmesider.
            </p>
          </b-col>
          <b-col cols="2">
            <img svg-inline svg-sprite
                 alt="Data, visualisering og kartografi"
                 src="./assets/svgs/data-visualisering-kartografi.svg"
                 class="img-fluid"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" offset="2">
            <img svg-inline svg-sprite
                 alt="Spørgeskemaer"
                 src="./assets/svgs/questionnaires.svg"
                 class="img-fluid"/>
          </b-col>
          <b-col cols="6">
            <h3>Kortbaserede undersøgelser</h3>
            <p>
              En undersøgelse er kun så god som sin spørgeskema.
              Vi designer spørgeskemaer og brugertester dem før de går live.
              Vi er eksperter i User Experience (UX) som sikrer at alle er med og fejlindtastninger mindskes.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="team">
      <b-container>
        <b-row>
          <b-col cols="10" offset="2">
            <h2>Team</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" offset="2">
            <img svg-inline svg-sprite
                 alt="Maja Møller"
                 src="./assets/svgs/woman.svg"
                 class="img-fluid"/>
          </b-col>
          <b-col cols="6">
            <h3>Maja Møller</h3>
            <p>
              Maja har beskæftiget sig med borgerinddragelse i landskaber i 10 år.
              Hun har specialiseret sig inden for digitale værktøjer til demokratisk
              kortlægning hvor alle interesserede har mulighed for at blive hørt.
            </p>
            <b-link href="https://www.linkedin.com/in/maja-steen-m%C3%B8ller-71569186/" target="_blank">
              <b-icon-linkedin class="icon-svg"></b-icon-linkedin>
            </b-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" offset="2">
            <img svg-inline svg-sprite
                 alt="Bernhard Snizek"
                 src="./assets/svgs/man.svg"
                 class="img-fluid"/>
          </b-col>
          <b-col cols="6">
            <h3>Bernhard Snizek</h3>
            <p>
              Bernhard har arbejdet med GIS i 20 år både i
              forhold til rumlige oplevelser og analyse af menneskelig,
              rumlig adfærd. Derudover har han udviklet kortbaseret software,
              samt arbejdet med brugerdrevne processer, User Experience og Usability.
            </p>
            <b-link href="https://www.linkedin.com/in/bsnizek" target="_blank">
              <b-icon-linkedin class="icon-svg"></b-icon-linkedin>
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="page-footer" id="contact">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2>Spatialize</h2><br/>
            <p>+45 2371 0046
              <a href="mailto:hej@spatialize.dk"><br/>hej@spatialize.dk</a></p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
