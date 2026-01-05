<svelte:head>
    <title>Business Automation & Software Development Services — Wetfish</title>
</svelte:head>

<style lang="scss">
    .business {
        position: relative;
        overflow: hidden;
    }

    .content-background {
        .header {
            position: absolute;
            width: 100%;
            min-height: 1200px;
            background-image: url('$lib/images/bg-business.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: -315px 0px;
            transform: rotate(180deg);
        }

        .gradient {
            position: absolute;
            width: 100%;
            min-height: 1200px;
            background-image: linear-gradient(0deg,#010902ff 0%, #01090200 100%);
        }

        .blue-cloud {
            position: absolute;
            top: 1050px;
            width: 100%;
        }

        .purple-cloud {
            position: absolute;
            top: 2100px;
            right: 0;
            width: 125%;
        }
    }

    .globe {
        position: absolute;
        right: 65%;
        top: 100px;
        z-index: 0;
        transform: rotate(-30deg);
    }

    .content {
        display: flex;
        justify-content: flex-start;

        .text {
            padding: 1em;
        }

        &.one {
            padding-top: 150px;
        }

        &.two {
            padding-top: 0;
        }

        &.three {
            flex-direction: column;
        }
    }

    @media screen and (min-width: 400px) {
        .content-background {
            .blue-cloud {
                top: 980px;
                width: 85%;
            }

            .purple-cloud {
                top: 1900px;
            }
        }
    }

    @media screen and (min-width: 600px) {
        .content-background {
            .blue-cloud {
                top: 740px;
                width: 75%
            }

            .purple-cloud {
                top: 1600px;
                width: 100%;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .content-background {
            .header {
                min-height: 1500px;
                background-position: -250px 25px;
            }

            .gradient {
                min-height: 1500px;
            }

            .blue-cloud {
                top: 750px;
                width: 65%
            }

            .purple-cloud {
                top: 1700px;
                width: 90%;
            }
        }

        .content {
            .text {
                width: 80%;
                padding: 4em 2em;
            }

            &.two {
                justify-content: flex-end;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        .content-background {
            .blue-cloud {
                top: 1000px;
                width: 50%
            }

            .purple-cloud {
                top: 2000px;
                width: 75%;
            }
        }

        .content {
            .text {
                width: 70%;
                padding: 4em 2em;
            }
        }

        h1, h3, p {
            width: 80%;
        }
    }

    @media screen and (min-width: 1200px) {
        .content {
            &.three {
                h1, h3, .section-number {
                    margin-left: 20%;
                }
            }
        }
    }

    @media screen and (min-width: 1300px) {
        .content {
            &.three {
                h1, h3, .section-number {
                    margin-left: 5%;
                }
            }
        }
    }

    @media screen and (min-width: 1400px) {
        .content-background {
            .blue-cloud {
                top: 900px;
                width: 50%
            }

            .purple-cloud {
                top: 1900px;
                width: 60%;
            }
        }

        .content {
            .text {
                width: 60%;
            }

            &.three {
                h1, h3, .section-number {
                    margin-left: 10%;
                }
            }
        }

        h1, h3 {
            width: 100%;
        }
    }

    @media screen and (min-width: 1600px) {
        .content {
            padding: 200px 0 0 8em;

            .text {
                padding: 4em 0;
            }

            &.three {
                h1, h3, .section-number {
                    margin-left: 20%;
                }
            }
        }

        h1, h3, p {
            width: 80%;
        }

    }
</style>

<script>
    import DisappearingContent from "$lib/components/DisappearingContent.svelte";
    import Accordion from '$lib/components/Accordion.svelte';
    import Blob from '$lib/components/Blob.svelte';
    import Globe from "$lib/components/Globe.svelte";
    import Modal from '$lib/components/Modal.svelte';
    import blueCloud from '$lib/images/cloud-blue.png';
    import purpleCloud from '$lib/images/cloud-purple.png';
    import Footer from "$lib/components/Footer.svelte";

    const accordionOptions = [
        {id: 'techdev', title: 'Software Development'},
        {id: 'bizdev', title: 'Business Automation'},
        {id: 'design', title: 'Design & Branding'},
    ];

    let showModal = '';
    function closeModal() {
        console.log('close modal');
        showModal = '';
        document.body.classList.remove('modal-open');

    }
    function openModal(event, modal = '') {
        event.preventDefault();
        showModal = modal;
        document.body.classList.add('modal-open');
    }
</script>

<section class="business">
    <Modal open="{showModal === 'chive-charities'}" closeModal={closeModal}>
        <div slot="image">
            <Blob type="5">
              <img style="width: 100%;" src="/content/business-chive-charities.jpg" alt="A screenshot of the Chive Charities Website" />
            </Blob>
        </div>
        <h2 slot="heading">Chive Charities</h2>
        <div slot="content">
          <p>Description of Chive Charities</p>
          <p>The Wetfish Community is a mix of everything from queer hackers, to farmers, researchers, and artists. Some of us work at senior positions at big tech companies, others are just trying to make ends meet. We're spread out across the globe physically, but digitally united.</p>
          <br/><a class="button full" href="https://chivecharities.org/">Visit Chive Charities</a>
        </div>
    </Modal>
    <Modal open="{showModal === 'churnkey'}" closeModal={closeModal}>
        <div slot="image">
            <Blob type="4">
              <img style="width: 100%;" src="/content/business-churnkey.png" alt="A screenshot of the Churnkey Website" />
            </Blob>
        </div>
        <h2 slot="heading">Churnkey</h2>
        <div slot="content">
          <p>Churnkey.co</p>
          <p>The Wetfish Community is a mix of everything from queer hackers, to farmers, researchers, and artists. Some of us work at senior positions at big tech companies, others are just trying to make ends meet. We're spread out across the globe physically, but digitally united.</p>
          <br/><a class="button full" href="https://churnkey.co/">Visit Churnkey</a>
        </div>
    </Modal>
    <Modal open="{showModal === 'coyote'}" closeModal={closeModal}>
        <div slot="image">
            <Blob type="3">
              <img style="width: 100%;" src="/content/business-coyote.jpg" alt="A screenshot of the Coyote.space Website" />
            </Blob>
        </div>
        <h2 slot="heading">Coyote Space</h2>
        <div slot="content">
          <p>Coyote.space</p>
          <p>The Wetfish Community is a mix of everything from queer hackers, to farmers, researchers, and artists. Some of us work at senior positions at big tech companies, others are just trying to make ends meet. We're spread out across the globe physically, but digitally united.</p>
          <br/><a class="button full" href="https://coyote.space/">Visit Coyote Space</a>
        </div>
    </Modal>
    <Modal open="{showModal === 'wavve'}" closeModal={closeModal}>
        <div slot="image">
            <Blob type="7">
              <img style="width: 100%;" src="/content/business-wavve.png" alt="A screenshot of the Wavve.co Website" />
            </Blob>
        </div>
        <h2 slot="heading">Wavve</h2>
        <div slot="content">
          <p>wavve.co</p>
          <p>The Wetfish Community is a mix of everything from queer hackers, to farmers, researchers, and artists. Some of us work at senior positions at big tech companies, others are just trying to make ends meet. We're spread out across the globe physically, but digitally united.</p>
          <br/><a class="button full" href="https://wavve.co/">Visit Wavve</a>
        </div>
    </Modal>
    <div class="content-background">
        <div class="header"></div>
        <div class="gradient"></div>
        <img class="blue-cloud" src="{blueCloud}" alt="Blue nebula cloud background">
        <img class="purple-cloud" src="{purpleCloud}" alt="Purple nebula cloud background">
    </div>

    <div class="globe">
        <Globe />
    </div>

    <DisappearingContent>
        <div class="content one">
            <div class="text">
                <div class="section-number">01</div>
                <h3>— Let's Talk Business</h3>
                <h1>Making Your Dreams a Reality</h1>

                <p>
                    If you have a vision for a new project but need talent to make that happen, we're here to help.
                </p>

                <p>
                    When you hire Wetfish, you tap into decades of collective experience in everything from developing mobile & web applications, to CAD product design, and assembly of custom embedded Linux systems.
                </p>

                <p>
                    If you need help maintaining or adding new features to your existing projects, we do that too.
                    We will work with you to identify inefficiencies in your business operations and offer software solutions that help automate your workflow.
                </p>

                <div class="buttons">
                    <a class="button full" href="mailto:business@wetfish.net">Hire Us</a>
                </div>
            </div>
        </div>

        <div class="content two">
            <div class="text">
                <div class="section-number">02</div>
                <h3>— Our Services</h3>
                <h1>What We Can Do For You</h1>

                <Accordion options={accordionOptions}>
                    {#snippet techdev()}
                        <p>
                            Wetfish builds custom software and hardware products for startups & small businesses.
                        </p>

                        <p>
                            New businesses are always solving new problems, that's the perfect opprotunity to develop custom web and mobile applications for helping startups manage their unique supply chains and production processes.
                        </p>

                        <p>
                            Augment your team with our knowledgable staff.
                        </p>

                        <p>
                            When you hire Wetfish you're tapping into a talented group of developers, designers, and experienced project managers who will work with you every step of the product development process.
                        </p>
                    {/snippet}

                    {#snippet bizdev()}
                        <p>
                            Already run an established business? We can help streamline and improve your operations.
                            Wetfish builds custom software and hardware products that automate tedious jobs like collecting information and generating reports.
                            If your staff have more important things to be working on, Wetfish can save your organization thousands of hours of time that would otherwise be spent on data entry and spreadsheets.
                        </p>

                        <p>
                            Build new features into your existing products.
                            When you hire Wetfish you're tapping into a talented group of developers, designers, and experienced project managers who have worked together on projects ranging from charities to aerospace.
                        </p>
                    {/snippet}

                    {#snippet design()}
                        <p>
                            Wetfish creates custom designs for web, print, and physical products.
                            We've created product labels for breweries, routers for satellites, and built a food truck from scratch.
                        </p>

                        <ul>
                            <li>Custom user experience for your web or mobile application</li>
                            <li>Develop new marketing and branding material</li>
                            <li>Create a product from scratch using 3D CAD modeling</li>
                        </ul>
                    {/snippet}
                </Accordion>
            </div>
        </div>

        <div class="content three">
            <div class="text">
                <div class="section-number">03</div>
                <h3>— Our Portfolio</h3>
                <h1>Businesses We've Helped</h1>
            </div>

            <div class="projects">
                <a href="https://chivecharities.org/" on:click={(event) => openModal(event, 'chive-charities')}>
                    <div class="project">
                        <Blob type="5">
                            <img src="/content/business-chive-charities.jpg" alt="A screenshot of the Chive Charities Website" />
                        </Blob>
                        <div class="button wide dark">Chive Charities</div>
                    </div>
                </a>
                <a href="https://churnkey.co/" on:click={(event) => openModal(event, 'churnkey')}>
                    <div class="project">
                        <Blob type="4">
                            <img src="/content/business-churnkey.png" alt="A screenshot of the ChurnKey.co Website" />
                        </Blob>
                        <div class="button wide dark">Churnkey</div>

                    </div>
                </a>

                <a href="https://coyote.space/" on:click={(event) => openModal(event, 'coyote')}>
                    <div class="project">
                        <Blob type="3">
                            <img src="/content/business-coyote.jpg" alt="A screenshot of the Coyote Space Website" />
                        </Blob>
                        <div class="button wide dark">Coyote Space</div>
                    </div>
                </a>

                <a href="https://wavve.co/" on:click={(event) => openModal(event, 'wavve')}>
                    <div class="project">
                        <Blob type="7">
                            <img src="/content/business-wavve.png" alt="A screenshot of the Wavve.co Website" />
                        </Blob>
                        <div class="button wide dark">Wavve</div>
                    </div>
                </a>
            </div>
        </div>
        <Footer color="blue"></Footer>
    </DisappearingContent>
</section>
