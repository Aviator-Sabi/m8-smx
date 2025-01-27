function layoutPreparation() {
    // Make sure the elements are defined
    const pullSystemContainer = document.getElementById("pullSystemContainer");
    const sprayHandContainer = document.getElementById("sprayHandContainer");
    const sprayer = document.getElementById("sprayer");
    const carContainer = document.getElementById("carContainer");
    const scaleContainer = document.getElementById("scaleContainer");
    const grabbingHand = document.getElementById("grabbingHand");

    gsap.set(pullSystemContainer, {
        x: 375,
        y: 646
    });
    gsap.set(sprayHandContainer, {
        x: 700,
        y: 621
    });
    gsap.set(sprayer, {
        x: -59.5,
        y: 53
    });
    gsap.set(carContainer, {
        x: 190,
        y: 802
    });
    gsap.set(scaleContainer, {
        x: 170,
        y: 710
    });
    gsap.set(grabbingHand, {
        x: 297,
        y: 830
    });
}
