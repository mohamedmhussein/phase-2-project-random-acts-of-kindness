function Post() {

    return (
        <article className="columns">
            <div className="box column is-half is-offset-3 content is-normal " style={{ opacity: "70%" }}>
                <button class="column delete is-offset-11  is-1 mt-4"></button>
                <h1 className="my-1 has-text-centered is-6 "> Helping Emily </h1>
                <p className="column mx-4 has-text-justified">
                    It was a cold winter evening when a young woman named Sarah was driving home from work. Suddenly, her car started sputtering and came to a halt on a deserted road. Feeling helpless, she frantically searched for her phone, but realized she had left it at the office. Just as despair was starting to set in, I pulled over to offer assistance. I had noticed Sarah's predicament and immediately offered to call a tow truck and stay with her until help arrived. My act of kindness not only provided practical assistance, but also comforted Sarah during a vulnerable and stressful situation.
                </p>
                <div class="field is-grouped mx-5">
                    <p class="control">
                        <button class="button is-warning">
                            <i class="fa-solid fa-heart mr-2 has-text-danger"></i> Like
                        </button>
                    </p>
                    <p class="control">
                        <button class="button is-warning">
                            <i class="fa-solid fa-circle-check mr-2 has-text-success"></i>I did it!
                        </button>
                    </p>
                    <p class="control">
                        <button class="button is-warning">
                        <i class="fa-sharp fa-solid fa-flag-swallowtail"></i> I will do it!
                        </button>
                    </p>
                </div>
            </div>

        </article>
    )
}

export default Post