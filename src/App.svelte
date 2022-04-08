<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import GeneralSettings from "./settings/1-presentation/views/GeneralSettings.svelte";
  import PrivacySettings from "./settings/1-presentation/views/PrivacySettings.svelte";
</script>

<Router>
  <header>
    <h1>History</h1>

    <nav>
      <Link to="/">Home</Link>
      <Link to="general-settings">General settings</Link>
      <Link to="privacy-settings">Privacy settings</Link>
    </nav>
  </header>

  <main>
    <Route path="/">
      <div>Homeeeeee</div>
    </Route>

    <Route path="general-settings">
      <GeneralSettings />
    </Route>

    <Route path="privacy-settings">
      <PrivacySettings />
    </Route>

    <Route>
      <h3>404</h3>
      <p>No Route could be matched.</p>
    </Route>
  </main>
</Router>

<style></style>
