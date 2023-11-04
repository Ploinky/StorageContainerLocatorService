class ContainersController < ApplicationController
  def index
    @containers = Container.all
  end

  def new
    @container = Container.new
  end

  def create
    @container = Container.new(container_params)

    if @container.save
      redirect_to @container
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
    def container_params
      params.require(:container).permit(:name, :location_id)
    end
end
