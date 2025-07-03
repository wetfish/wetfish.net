<script>
	let { color } = $props();
    import greenBubbles from '$lib/images/bubbles-green.svg';
    import pinkBubles from '$lib/images/bubbles-pink.svg';
    import blueBubbles from '$lib/images/bubbles-blue.svg';

</script>
<style>
    h2, h2 {
        display: block;
    }
    .button.full {
        background-color: rgba(46, 207, 158, 0.25);
        color: #fff;
    }
    .button.hire {
        padding-left: 5.8rem;
        padding-right: 5.8rem;
    }
    @media screen and (max-width: 599px) {
        .button {
            width: 100%;
            margin-bottom: 12px;
        }
    }

    .footer {
        position: relative;
        padding: 4rem 2rem;
    }
    @media screen and (min-width: 600px) {
        .footer {
            padding: 16rem 6rem 10rem;
        }
    }
    .footer::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: bottom right;
    }
    .footer-content {
        display: block;
        position: relative;
        z-index: 1;
    }
    @media screen and (min-width: 600px) {
        .footer-content {
            width: 65%;
        }
    }
    .footer--blue {
        background-image: linear-gradient(to bottom, rgba(44, 13, 93, 0), rgba(11, 54, 84, 1) 50%);
    }
    .footer--blue::before {
        background-image: url('$lib/images/bubbles-blue.svg');
    }
    .footer--pink {
        background-image: linear-gradient(to bottom, rgba(44, 13, 93, 0), rgba(44, 13, 93, 1) 50%);
    }
    .footer--pink::before {
        background-image: url('$lib/images/bubbles-pink.svg');
    }
    .footer--green {
        background-image: linear-gradient(to bottom, rgba(169, 180, 38, 0), rgba(16, 56, 24, 1) 50%);
    }
    .footer--green::before {
        background-image: url('$lib/images/bubbles-green.svg');
    }
</style>

<div class="footer footer--{color}">
    <div class="footer-content">
        <h3>Have an idea for a project?</h3>
        <h1>Need help making your dreams a reality?</h1>
        <div class="buttons">
            <a class="button hire full" href="mailto:business@wetfish.net">Hire Us</a>
            <a class="button dark" href="/community">Join the Community</a>
        </div>
    </div>
</div>