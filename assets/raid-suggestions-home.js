/* RAID ATLAS — dépôt de suggestions, sans comptes utilisateurs.
 * API Cloudflare Pages. Le site GitHub Pages utilise la même API Cloudflare.
 */
(() => {
 "use strict";
 const section = document.getElementById("raid-suggestions");
 const form = document.getElementById("raid-suggestions-form");
 const toggle = document.getElementById("raid-suggestions-toggle");
 const feedback = document.getElementById("raid-suggestions-feedback");
 if (!section || !form || !toggle || !feedback) return;
 const endpoint = (location.hostname === "seikochillbot.github.io"
   ? "https://pokemmo-raids.pages.dev"
   : location.origin) + "/api/suggestions";
 const submit = form.querySelector('button[type="submit"]');
 toggle.addEventListener("click", () => {
   const willShow = form.hidden;
   form.hidden = !willShow;
   toggle.setAttribute("aria-expanded", String(willShow));
   toggle.textContent = willShow ? "Hide form" : "Share a suggestion";
   if (willShow) form.querySelector("select,textarea,input")?.focus();
 });
 form.addEventListener("submit", async event => {
   event.preventDefault();
   feedback.textContent = "";
   feedback.dataset.kind = "";
   const message = form.querySelector('[name="message"]').value.trim();
   const nickname = form.querySelector('[name="nickname"]').value.trim();
   const category = form.querySelector('[name="category"]').value;
   const website = form.querySelector('[name="website"]').value;
   if (message.length < 12 || message.length > 1200) {
     feedback.dataset.kind = "error";
     feedback.textContent = "Please describe your idea in 12 to 1,200 characters.";
     return;
   }
   submit.disabled = true;
   const old = submit.textContent;
   submit.textContent = "Sending…";
   try {
     const result = await fetch(endpoint, {
       method:"POST",
       headers: { "Content-Type":"application/json" },
       body: JSON.stringify({ category, nickname, message, website }),
       mode:"cors",
       cache:"no-store"
     });
     const responseType = result.headers.get("content-type") || "";
     if (!responseType.toLowerCase().includes("application/json")) {
       throw new Error(
         "The Suggestions API is not available on this host (HTTP " +
         result.status + "). Check the Cloudflare Pages Functions deployment."
       );
     }
     let data = {};
     try { data = await result.json(); } catch (_) {
       throw new Error("Invalid response from the Suggestions API (HTTP " + result.status + ").");
     }
     if (!result.ok || !data.ok) throw new Error(
       (data.error || "Suggestions are unavailable right now.") +
       " (HTTP " + result.status + ")"
     );
     form.reset();
     feedback.dataset.kind = "success";
     feedback.textContent = "Thanks! Your suggestion has been submitted for review.";
   } catch (error) {
     feedback.dataset.kind = "error";
     feedback.textContent = error instanceof TypeError
       ? "Could not reach the Cloudflare API. Check that /api/suggestions has been deployed."
       : (error.message || "We couldn't submit your suggestion. Please try again later.");
   } finally {
     submit.disabled = false;
     submit.textContent = old;
   }
 });
})();
