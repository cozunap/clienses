#!/bin/bash
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/bg-soft-black/bg-bg-light/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/text-soft-black/text-bg-light/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/text-light-gray/text-text-main/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/bg-light-gray/bg-text-main/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/text-magenta/text-primary/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/bg-magenta/bg-primary/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/border-magenta/border-primary/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/bg-charcoal/bg-structure/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/text-charcoal/text-structure/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/border-charcoal/border-structure/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/text-slate-gray/text-gray-med/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/bg-slate-gray/bg-gray-med/g;'

# Contrast inversion for explicit white/black defaults
# where "white" was used on dark backgrounds, it now needs to be dark text on light background.
# This might be tricky, let's just replace most common text-white to text-text-main
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/text-white\/([0-9]+)/text-text-main\/$1/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/border-white\/([0-9]+)/border-text-main\/$1/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/bg-white\/([0-9]+)/bg-text-main\/$1/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/text-white/text-text-main/g;'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs perl -pi -e 's/border-white/border-text-main/g;'
# If something was explicitly bg-white as a card, it can remain white but we need to change it
# Wait! If we change text-white to text-text-main, that's good. But what if we change bg-white?
# Let's leave bg-white as bg-white for now unless it has an opacity modified.

